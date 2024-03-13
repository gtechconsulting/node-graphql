import request from 'supertest';
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('Audit Log query', async () => {
  const app = express();

  app.use('/graphql', createHandler({
    context: context as any,
    schema,
  }));

  const query = `
    query {
      auditLog(id: 1) {
        id
        _id
        log
        createdAt
      }
    }
  `;

  const response = await request(app)
    .post('/graphql')
    .type('json')
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);

  expect(JSON.parse(response.text)).toEqual({
    data: {
      auditLog: {
        id: 'cXVvdGUtMQ==',
        _id: '1',
        log: 'First, solve the problem. Then, write the code.',
        createdAt: '2020-07-02 12:43:00'
      }
    }
  });
});
