import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "./comments.model";
import { WhereOptions } from "sequelize";
import { CreateCommentDto } from "./dto";

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private readonly repository: typeof Comment) {}

  async findAll(where: WhereOptions) {
    return await this.repository.findAll({ where });
  }

  async findOne(where: WhereOptions) {
    return await this.repository.findOne({ where });
  }

  async create(dto: CreateCommentDto) {
    return await this.repository.create({...dto});
  }
}