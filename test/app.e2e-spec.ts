import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import getDataSourceConfig from '../src/data-source.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experiments } from '../src/entities/experiment.entity';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import * as session from 'express-session';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(getDataSourceConfig()),
        TypeOrmModule.forFeature([Experiments]),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.use(
      session({
        secret: 'simple_test_secret',
        resave: false,
        saveUninitialized: false,
      }),
    );
    await app.init();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/')
      .set('Device-Token', 'test')
      .expect(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        button_color: expect.stringContaining('#'),
        price: expect.any(Number),
      }),
    );
  });
});
