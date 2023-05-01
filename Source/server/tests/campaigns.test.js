const request = require('supertest');
const app = require('../app');
const { connect, disconnect } = require('../utils/db');
const User = require('../models/campaign_schema');
const jwt = require('jsonwebtoken');

let token;
let todoId;

afterAll(async () => {
    await disconnect();
});

describe('Get all campaigns', () => {
    // 9 campaigns in seed data
    it('should get all campaigns', async () => {
        const res = await request(app).get(`/api/campaigns`);
        campaignId = res.body[1]._id;
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(9);
    })
})