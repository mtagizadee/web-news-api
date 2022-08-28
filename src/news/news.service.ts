import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { News } from "./news.model";
import { WhereOptions } from "sequelize";
import { CreateNewsDto } from "./dto";
import { ImagesService } from "../images/images.service";
import { Image } from "../images/image.model";

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News) private readonly repository: typeof News,
    private readonly imagesService: ImagesService
  ) {}

  async findAll(where: WhereOptions) {
    const news: News[] = await this.repository.findAll({
      where,
      include: {
        all: true
      }
    });

    let result = [];
    for (let i = 0; i < news.length; i++) {
      const image = await this.getImage(news[i]);
      const {id, part1, part2, title} = news[i];
      result.push({ id, part1, part2, title, image });
    }

    return result;
  }

  async findOne(where: WhereOptions) {
    const news: News = await this.repository.findOne({
      where,
      include: {
        all: true
      }
    });
    const image = await this.getImage(news);
    const {id, part1, part2, title} = news;
    return {id, part1, part2, title, image }
  }

  async create(dto: CreateNewsDto) {
    try {
      return await this.repository.create({...dto});
    } catch (error) {
      console.log(error);
    }
  }

  private async getImage(news: News) {
    const images: Image[] = news.images;
    if (images.length === 0) return null;

    return await this.imagesService.findOne({ id: images[0].id });
  }
}
