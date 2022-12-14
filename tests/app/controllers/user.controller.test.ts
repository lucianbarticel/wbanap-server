import { Container } from 'inversify';
import { Application } from 'express';
import { TYPES } from '../../../src/server/types';
import request from 'supertest';
import { configServer } from '../../../src/server/server';
import { IUserRepository } from '../../../src/domain/User';

jest.mock('../../../src/app/middlewares/isAuthenticated.middleware.ts', () => ({
  isAuthenticated: (_: any, __: any, next: () => any) => next(),
}));

describe('User controller test', () => {
  let server: {
    app: Application;
    container: Container;
  };
  beforeAll(async () => {
    server = await configServer(true);
  });
  test('/user/ should return all users', async () => {
    const response = await request(server.app).get('/user').set('Accept', 'application/json');

    expect(response.body.length).toBeGreaterThan(1);
  });

  test('/user/:id should return 404 if user not found', async () => {
    const response = await request(server.app)
      .get('/user/randomId')
      .set('Accept', 'application/json');

    expect(response.status).toBe(404);
  });

  test('/user/create should create an user', async () => {
    const user = {
      name: 'vasile',
      surname: 'vasilache',
      role: 'LSE',
      email: 'vasile@yahoo.com',
      password: '1234',
    };

    const response = await request(server.app)
      .post('/user/create')
      .send(user)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    const userRepo = server.container.get<IUserRepository>(TYPES.USER_REPOSITORY);
    const savedUser = await userRepo.getByEmail(user.email);
    expect(savedUser).not.toBeFalsy();
    expect(savedUser?.name).toBe('vasile');
  });

  test('/user/create should return 400 if any details are missing', async () => {
    const incompleteUser = {
      name: 'vasile',
      surname: 'vasilache',
      role: 'LSE',
      plainPassword: '1234',
    };

    const response = await request(server.app)
      .post('/user/create')
      .send(incompleteUser)
      .set('Accept', 'application/json');
    expect(response.status).toBe(400);
  });
});
