import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey, Table
} from "sequelize-typescript";
import { News } from "../news/news.model";
import { User } from "../users/users.model";

@Table
export class Comment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  content: string;

  @BelongsTo(() => News)
  news: News;

  @ForeignKey(() => News)
  newsId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  authorId: number;
}