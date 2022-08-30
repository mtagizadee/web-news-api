import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
  @IsString({message: 'content must be a string'})
  @IsNotEmpty({message: 'content is missing'})
  readonly content: string;

  @IsNumber({},{message: 'newsId must be a number'})
  @IsNotEmpty({message: 'newsId is missing'})
  readonly newsId: number;
}