import { Injectable, NotFoundException, StreamableFile } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Image } from "./image.model";
import { CreateImageDto } from "./dto";
import { WhereOptions } from "sequelize";
import { createReadStream, ReadStream } from "fs";
import { join } from "path";

@Injectable()
export class ImagesService {
  constructor(@InjectModel(Image) private readonly repository: typeof Image) {}

  async findOne(where: WhereOptions) {
    const image: Image = await this.repository.findOne({ where });
    if (!image) throw new NotFoundException('image is not found');

    const stream: ReadStream = createReadStream(join(process.cwd(),image.path));
    return {
      stream: new StreamableFile(stream)
    }
  }

  async create(dto: CreateImageDto) {
    return await this.repository.create({ ...dto });
  }
}