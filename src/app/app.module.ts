import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from "../users/users.module";
import { User } from "../users/users.model";
import { ImagesModule } from "../images/images.module";
import { NewsModule } from "../news/news.module";
import { Image } from "../images/image.model";
import { News } from "../news/news.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      models: [User, Image, News],
      autoLoadModels: true
    }),
    AuthModule, UsersModule,
    ImagesModule, NewsModule
  ]
})
export class AppModule {}
