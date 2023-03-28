import { IsString, IsInt } from "class-validator";

export class CreateReptilDto {
    @IsString()
    name: string;
    @IsInt()
    age: number;
}