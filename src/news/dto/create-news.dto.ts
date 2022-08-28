import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNewsDto {
  @IsString({message: 'title must be a string'})
  @IsNotEmpty({message: 'title is missing'})
  readonly title: string;

  @IsString({message: 'part must be a string'})
  @IsNotEmpty({message: 'news must contain at least 1 part'})
  readonly part1: string;

  @IsString({message: 'part must be a string'})
  @IsOptional()
  readonly part2?: string;
}