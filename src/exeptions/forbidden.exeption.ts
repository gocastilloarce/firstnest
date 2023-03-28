import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenExeption extends HttpException{
    constructor(){
        super('Forbidden', HttpStatus.FORBIDDEN)
    }
}