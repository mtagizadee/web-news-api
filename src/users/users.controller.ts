import { Controller, ForbiddenException, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  async findAll() {
    return await this.service.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.findOne({ id });
  }
}