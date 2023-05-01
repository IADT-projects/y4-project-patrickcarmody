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

describe('Get all campaigns', () => {
    // 9 campaigns in seed data
    it('should get all campaigns', async () => {
        const res = await request(app).get(`/api/campaigns`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(9);
    })
})

describe('Create and get new campaign', () => {
    let newCampaignId;
    it('should create new campaign', async () => {
        const campaign = {
            title: 'Unit test campaign',
            description: 'Description for unit test campaign',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).post(`/api/campaigns`)
            .send(campaign)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        newCampaignId = res.body._id;
    });

    it('should get newly created campaign', async () => {
        const res = await request(app).get(`/api/campaigns/${newCampaignId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Unit test campaign");
        expect(res.body.description).toEqual("Description for unit test campaign");
    })
});

describe('Create and update new campaign', () => {
    let newCampaignId;
    it('should create new campaign', async () => {
        const campaign = {
            title: 'Unedited unit test campaign',
            description: 'Description for unedited unit test campaign',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).post(`/api/campaigns`)
            .send(campaign)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        newCampaignId = res.body._id;
    });

    it('should get newly created campaign', async () => {
        const res = await request(app).get(`/api/campaigns/${newCampaignId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Unedited unit test campaign");
    })

    it('should update newly created campaign', async () => {
        const editedCampaign = {
            title: 'Updated unit test campaign',
            description: 'Description for updated unit test campaign',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).put(`/api/campaigns/${newCampaignId}`)
            .send(editedCampaign)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Updated unit test campaign");
    })

    it('should get updated campaign', async () => {
        const res = await request(app).get(`/api/campaigns/${newCampaignId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Updated unit test campaign");
    })
});

describe('Create and delete new campaign', () => {
    let newCampaignId;
    it('should create new campaign', async () => {
        const campaign = {
            title: 'To be deleted unit test campaign',
            description: 'Description for to be deleted unit test campaign',
            category: 'other',
            creator: '0x000000000000000000000000000000000000dEaD',
            goal: 1,
            image: '.png',
            address: '0x000000000000000000000000000000000000dEaD'
        }
        const res = await request(app).post(`/api/campaigns`)
            .send(campaign)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
        newCampaignId = res.body._id;
    });

    it('should get newly created campaign', async () => {
        const res = await request(app).get(`/api/campaigns/${newCampaignId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("To be deleted unit test campaign");
    })

    it('should delete newly created campaign', async () => {
        const res = await request(app).delete(`/api/campaigns/${newCampaignId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    })

    it('should fail to get deleted campaign', async () => {
        const res = await request(app).get(`/api/campaigns/${newCampaignId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(404);
    })
});