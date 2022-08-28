import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto";
import { LoginUserDto } from "./dto";

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
}