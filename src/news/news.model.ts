import {
  AllowNull,
  AutoIncrement,
  DataType,
  Column,
  HasMany,
  Length,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";
import { Image } from "../images/image.model";
import { Comment } from "../comments/comments.model";

@Table
export class News extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  title: string;

  @AllowNull(false)
  @Length({
    msg: 'Length of the part must be between 500 and 800 characters',
    min: 500,
    max: 800
  })
  @Column(DataType.TEXT('long'))
  part1: string;

  @Length({
    msg: 'Length of the part must be between 500 and 800 characters',
    min: 500,
    max: 800
  })
  @Column(DataType.TEXT('long'))
  part2: string;

  @HasMany(() => Image)
  images: Image[];

  @HasMany(() => Comment)
  comments: Comment[];
}