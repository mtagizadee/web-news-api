import {
  Column,
  Model,
  PrimaryKey,
  Table,
  AllowNull,
  IsEmail,
  Unique,
  AutoIncrement,
  HasMany
} from "sequelize-typescript";
import { Comment } from "../comments/comments.model";

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  fullName: string;

  @Unique
  @IsEmail
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @HasMany(() => Comment)
  comments: Comment[];
}