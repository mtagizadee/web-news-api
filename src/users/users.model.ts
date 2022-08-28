import { Column, Model, PrimaryKey, Table, AllowNull, IsEmail, Unique, AutoIncrement } from "sequelize-typescript";

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
}