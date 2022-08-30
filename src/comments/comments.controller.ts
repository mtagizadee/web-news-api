import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto";
import { JwtAuthGuard } from "../auth/auth.guard";
import { Client } from "../decorators";

@Controller('comments')
export class CommentsController {
  constructor(private readonly service: CommentsService) {}

  @Get()
  async findAll() {
    return await this.service.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return await this.service.findOne({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Client('id') authorId: number,@Body() dto: CreateCommentDto) {
    return await this.service.create(authorId, dto);
  }
}