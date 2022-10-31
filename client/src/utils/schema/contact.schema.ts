import { IsNotEmpty, MinLength } from "class-validator";

export class ContactSchema {
  @IsNotEmpty({
    message: "required"
  })
  name: string;

  @MinLength(9)
  @IsNotEmpty({
    message: "required"
  })
  phone: string;
}
