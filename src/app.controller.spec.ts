import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Experiments } from './entities/experiment.entity';
import getDataSourceConfig from './data-source.config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(getDataSourceConfig()),
        TypeOrmModule.forFeature([Experiments]),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return experiments and return same experiments', async () => {
      const inputData = {
        Record: 'session',
      };
      const result = await appController.returnExperiment(
        inputData,
        'Device-Token',
      );
      expect(result).toEqual(
        expect.objectContaining({
          button_color: expect.stringContaining('#'),
          price: expect.any(Number),
        }),
      );
      const sameResult = await appController.returnExperiment(
        inputData,
        'Device-Token',
      );
      expect(sameResult).toEqual(result);
    });
  });
});
