import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const PORT: number = Number(process.env.PORT) || 3000;
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT:${PORT}`));
}
bootstrap();
