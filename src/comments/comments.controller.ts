import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto";

@Controller('comments')
export class CommentsController {
  constructor(private readonly service: CommentsService) {}

  @Get()
  async findAll() {
    return await this.service.findAll({});
  }

  @Get('id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return await this.service.findOne({ id });
  }

  @Post()
  async create(@Body() dto: CreateCommentDto) {
    return await this.service.create(dto);
  }
}