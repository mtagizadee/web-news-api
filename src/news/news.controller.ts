import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { NewsService } from "./news.service";
import { CreateNewsDto } from "./dto";

@Controller('news')
export class NewsController {
  constructor(private readonly service: NewsService) {}

  @Get()
  async findAll() {
    return await this.service.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.findOne({ id });
  }

  @Post()
  async create(@Body() dto: CreateNewsDto) {
    return await this.service.create(dto);
  }
}