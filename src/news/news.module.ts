import { Module } from "@nestjs/common";
import { NewsController } from "./news.controller";
import { NewsService } from "./news.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { News } from "./news.model";
import { ImagesModule } from "../images/images.module";

@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports: [SequelizeModule.forFeature([News]), ImagesModule]
})
export class NewsModule {}