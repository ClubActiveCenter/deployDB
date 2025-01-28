/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import  cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000, () =>
    console.log(`Server is listen on the port ${process.env.PORT}`),
  );
}
bootstrap();
