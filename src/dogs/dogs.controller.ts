import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, HostParam, Body, Res, HttpStatus, HttpException } from "@nestjs/common";
import { Request, Response } from "express";
import { escape } from "querystring";
import { Observable, of } from "rxjs";
import { CreateDogDto } from "./create-dog.dto";

@Controller('dogs')
export class DogsController {

    //Usando DTOs (Data Transfer Objects)
    @Post()
    async create(@Body() createDogDto: CreateDogDto) {
        console.log(typeof createDogDto.age)
        return 'This action adds a new dog'
    }

    //Async debe retornar una promesa
    @Get()
    async findAll(): Promise<any[]> {
        throw new HttpException("a", 200)
        return []
    }

    //Usando observable, no lo entiendo aun
    @Get('observable')
    findAllOBS():Observable<any[]> {
        return of([])
    }

    //Usar cosas especificas de express o fastify
    @Get('lib') 
    findlib(@Res({passthrough:true}) res: Response){
        res.status(HttpStatus.BAD_GATEWAY);
        return []
    }

    //Este tira una excepcion que no puede resolver el http-exception.filter
    @Get('lib2') 
    findlib2(){
        throw new Error("esto")
    }
}