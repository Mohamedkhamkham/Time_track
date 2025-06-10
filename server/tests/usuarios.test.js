const request = require('supertest');
const app = require('../app');

describe('GET /api/usuarios', () => {
  it('returns list of usuarios', async () => {
    const res = await request(app).get('/api/usuarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.usuarios) || Array.isArray(res.body)).toBe(true);
  });
});
