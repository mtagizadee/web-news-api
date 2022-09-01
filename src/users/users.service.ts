import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { WhereOptions } from "sequelize";
import { CreateUserDto } from "./dto";
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly repository: typeof User) {}

  async findAll(where: WhereOptions<User>) {
    return await this.repository.findAll({
      where,
      include: { all: true }
    });
  }

  async findOne(where: WhereOptions<User>) {
    return await this.repository.findOne({
      where,
      include: { all: true }
    });
  }

  async create(dto: CreateUserDto) {
    const {password} = dto;
    const hash: string = await argon.hash(password);

    try {
      return await this.repository.create({...dto, password: hash})
    } catch (error) {
      throw new BadRequestException('User already exist');
    }

  }
}