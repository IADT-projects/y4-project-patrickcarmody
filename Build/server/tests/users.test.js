const request = require('supertest');
const app = require('../app');
const { connect, disconnect } = require('../utils/db');
const User = require('../models/user_schema');
const jwt = require('jsonwebtoken');
let token;

beforeAll(async () => {
    await connect();

    let user = await User.findOne({
        email: "george@example.com"
    });

    token = jwt.sign({
        email: user.email,
        _id: user._id
    }, process.env.APP_KEY)
});

afterAll(async () => {
    await disconnect();
});

describe('Get all users', () => {
    it('should get all users', async () => {
        const res = await request(app).get(`/api/users`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(7);
    })
})

describe('Create and get user', () => {
    let newUserId;
    it('should register user', async () => {
        const newUser = 
        {
            "address": "0x000000000000000000000000000000000000dEaD",
            "first_name": "John",
            "biography": "New user bio",
            "last_name": "Smith",
            "email": "john@email.com",
            "password": "password123",
            "image": "image123"
        }
        const res = await request(app).post(`/api/users/register`)
        .send(newUser)
        expect(res.statusCode).toEqual(201);
        newUserId = res.body._id;
    })
    it('should get newly registered user', async () => {
        const res = await request(app).get(`/api/users/${newUserId}`);
        expect(res.body._id).toEqual(newUserId);
        expect(res.body.email).toEqual("john@email.com")
    })
})

describe('Create and update user', () => {
    let newUserId;
    it('should register user', async () => {
        const newUser = 
        {
            "address": "0x000000000000000000000000000000000000dEaD",
            "first_name": "Sam",
            "biography": "New user bio",
            "last_name": "Lastname",
            "email": "sam@email.com",
            "password": "password123",
            "image": "image123"
        }
        const res = await request(app).post(`/api/users/register`)
        .send(newUser)
        expect(res.statusCode).toEqual(201);
        newUserId = res.body._id;
    })
    it('should update newly registered user', async () => {
        const editedUser = 
        {
            "biography": "Updated user bio",
        }
        const res = await request(app).delete(`/api/users/${newUserId}`)
            .send(editedUser)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.biography).toEqual("Updated user bio");
    })
})


describe('Create and delete user', () => {
    let newUserId;
    it('should register user', async () => {
        const newUser = 
        {
            "address": "0x000000000000000000000000000000000000dEaD",
            "first_name": "Harry",
            "biography": "New user bio",
            "last_name": "Smith",
            "email": "harry@email.com",
            "password": "password123",
            "image": "image123"
        }
        const res = await request(app).post(`/api/users/register`)
        .send(newUser)
        expect(res.statusCode).toEqual(201);
        newUserId = res.body._id;
    })
    it('should delete newly registered user', async () => {
        const res = await request(app).delete(`/api/users/${newUserId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toContain('was deleted')
    })
})

