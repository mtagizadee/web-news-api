import { Controller, Get, Param, ParseIntPipe, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ImagesService } from "./images.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('images')
export class ImagesController {
  constructor(private readonly service: ImagesService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.findOne({ id });
  }

  @Post('news=:newsId')
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Param('newsId',ParseIntPipe) newsId: number
  ) {
    return await this.service.create({
      path: image.path,
      filename: image.filename,
      mimetype: image.mimetype,
      newsId
    });
  }
}