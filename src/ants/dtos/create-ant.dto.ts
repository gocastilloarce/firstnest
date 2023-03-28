import { IsInt, IsString } from "class-validator";

export class CreateAntDTO {
    @IsString()
    name:string;
    @IsString()
    breed:string;
    @IsInt()
    age:number;
}