import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import getDataSourceConfig from './data-source.config';
import { Experiments } from './entities/experiment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDataSourceConfig()),
    TypeOrmModule.forFeature([Experiments]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
