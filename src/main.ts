import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  app.use(
    session({
      secret: process.env.SESSION_SECRET ?? 'simple_local_secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
