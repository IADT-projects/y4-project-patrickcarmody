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

describe('Get all charities', () => {
    // 3 charities in seed data
    it('should get all charities', async () => {
        const res = await request(app).get(`/api/charities`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(3);
    })
})

describe('Create and get new charity', () => {
    let newCharityId;
    it('should create new charity', async () => {
        const charity = {
            title: 'Unit test charity',
            description: 'Description for unit test charity',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).post(`/api/charities`)
            .send(charity)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        newCharityId = res.body._id;
    });

    it('should get newly created charity', async () => {
        const res = await request(app).get(`/api/charities/${newCharityId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Unit test charity");
        expect(res.body.description).toEqual("Description for unit test charity");
    })
});

describe('Create and update new charity', () => {
    let newCharityId;
    it('should create new charity', async () => {
        const charity = {
            title: 'Unedited unit test charity',
            description: 'Description for unedited unit test charity',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).post(`/api/charities`)
            .send(charity)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        newCharityId = res.body._id;
    });

    it('should get newly created charity', async () => {
        const res = await request(app).get(`/api/charities/${newCharityId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Unedited unit test charity");
    })

    it('should update newly created charity', async () => {
        const editedCharity = {
            title: 'Updated unit test charity',
            description: 'Description for updated unit test charity',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).put(`/api/charities/${newCharityId}`)
            .send(editedCharity)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Updated unit test charity");
    })

    it('should get updated charity', async () => {
        const res = await request(app).get(`/api/charities/${newCharityId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Updated unit test charity");
    })
});

describe('Create and delete new charity', () => {
    let newCharityId;
    it('should create new charity', async () => {
        const charity = {
            title: 'To be deleted unit test charity',
            description: 'Description for to be deleted unit test charity',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).post(`/api/charities`)
            .send(charity)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        newCharityId = res.body._id;
    });

    it('should get newly created charity', async () => {
        const res = await request(app).get(`/api/charities/${newCharityId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("To be deleted unit test charity");
    })

    it('should delete newly created charity', async () => {
        const res = await request(app).delete(`/api/charities/${newCharityId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    })

    it('should fail to get deleted charity', async () => {
        const res = await request(app).get(`/api/charities/${newCharityId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(404);
    })
});