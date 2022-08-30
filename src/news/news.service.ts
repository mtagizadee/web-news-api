import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { News } from "./news.model";
import { WhereOptions } from "sequelize";
import { CreateNewsDto } from "./dto";
import { ImagesService } from "../images/images.service";

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News) private readonly repository: typeof News,
    private readonly imagesService: ImagesService
  ) {}

  async findAll(where: WhereOptions) {
    return await this.repository.findAll({
      where,
      include: {
        all: true
      }
    });
  }

  async findOne(where: WhereOptions) {
    return await this.repository.findOne({
      where,
      include: {
        all: true
      }
    });
  }

  async create(dto: CreateNewsDto) {
    try {
      return await this.repository.create({...dto});
    } catch (error) {
      console.log(error);
    }
  }
}
