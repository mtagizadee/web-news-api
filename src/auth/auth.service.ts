import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto";
import { User } from "../users/users.model";
import { LoginUserDto } from "./dto";
import * as argon from 'argon2';
import { Payload } from "../types";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(dto: LoginUserDto) {
    const user: User = await this.userService.findOne({
      email: dto.email
    });
    if (!user) throw new NotFoundException('user is not found');

    const isPasswordValid: boolean = await argon.verify(user.password, dto.password);
    if (!isPasswordValid) throw new ForbiddenException('password is not valid');

    return this.sign(user);
  }

  async signup(dto: CreateUserDto) {
    try {
      const user: User = await this.userService.create(dto);
      return this.sign(user);
    } catch (error) {
      throw error;
    }
  }

  private async sign(user: User) {
    const {email, fullName, id, comments} = user;
    const payload: Payload = { id, fullName }

    const token: string = this.jwtService.sign(payload,{
      expiresIn: '72h',
      secret: process.env.JWT_SECRET
    });

    return { access_token: token }
  }
}