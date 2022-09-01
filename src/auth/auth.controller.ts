import { Body, Controller, ForbiddenException, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto";
import { LoginUserDto } from "./dto";
import { Client } from "../decorators";
import { User } from "../users/users.model";
import { JwtAuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    return await this.service.login(dto);
  }

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    return await this.service.signup(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Client() user: User) {

    return user;
  }
}