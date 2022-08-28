import { Module } from "@nestjs/common";
import { ImagesService } from "./images.service";
import { ImagesController } from "./images.controller";
import * as path from "path";
import {v4} from 'uuid';
import { MulterModule } from "@nestjs/platform-express";
import {diskStorage} from "multer";
import { SequelizeModule } from "@nestjs/sequelize";
import { Image } from "./image.model";

@Module({
  providers: [ImagesService],
  controllers: [ImagesController],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './storage',
        filename: (
          req: Express.Request,
          file: Express.Multer.File,
          callback: (error: (Error | null), filename: string) => void
        ) => {
          callback(null, v4() + path.extname(file.originalname))
        }
      })
    }),
    SequelizeModule.forFeature([Image])
  ],
  exports: [ImagesService]
})
export class ImagesModule {}