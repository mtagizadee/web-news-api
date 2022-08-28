import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";
import { News } from "../news/news.model";

@Table
export class Image extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  path: string;

  @AllowNull(false)
  @Column
  filename: string;

  @AllowNull(false)
  @Column
  mimetype: string;

  @ForeignKey(() => News)
  newsId: number;

  @BelongsTo(() => News)
  news: News;
}