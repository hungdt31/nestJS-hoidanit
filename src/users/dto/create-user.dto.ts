import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, isNotEmptyObject, IsObject, ValidateNested } from "class-validator";
import mongoose from "mongoose";

class Company {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  name: string;
}
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  address: string;

  age: number

  @IsNotEmpty()
  gender: string;

  role: string;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
