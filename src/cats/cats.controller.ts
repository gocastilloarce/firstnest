import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, HostParam, Body, Res, HttpStatus, HttpException, UseFilters } from "@nestjs/common";
import { Request, Response } from "express";
import { escape } from "querystring";
import { ForbiddenExeption } from "src/exeptions/forbidden.exeption";
import { HttpExceptionFilter } from "src/exeptions/http-exception.filer";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interfaces/cat.interface";

@Controller('cats1')
export class CatsController2 {

    //Post con cambio de statuscode y header
    @Post("new")
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create():string{
        return 'this action adds a new cat'
    }

    //Get con decorador de Request
    @Get()
    findAll(@Req() request: Request): string {
        console.log(request.hostname)
        return 'This action retruns all cats'
    }

    //Wildcard
    @Get('ab*cd')
    find() {
        return 'this is a wildcard'
    }

    //Redirecciones
    @Get('redirect')
    @Redirect('https://google.com', 301)
    redi(){}

    @Get('docs')
    @Redirect('https://google.com', 301)
    redi2(@Query('version') version){
        if (version && version === '5') {
            return {url:"https://docs.nestjs.com/v5"}
        }
    }
    
    //Parametros de url
    @Get(':id')
    findOne(@Param('id') id:string):string {
        return `This action returns a #${id} cat`
    }
    
    @Get('esto/:id')
    findEsto(@Param() params):string {
        console.log(params.id);
        return `This action returns a #${params.id} cat esto`   
    }

    @Get('esto2/:id')
    findEsto2(@Param() {id}):string {
        console.log(id);
        return `<h1>This action returns a #${escape(id)} cat esto 2</h1>` 
    }
}

//host personalizados con variables
@Controller({host:':account.:b.:c.:d'})
export class AccountController {
    @Get()
    getInfo(@HostParam() {account, b, c, d}) {
        return `${account}, ${b}, ${c}, ${d}`
    }
}


//se puede aplicar el filtro al controlador entero
//@UseFilters(new HttpExceptionFilter())
@Controller("cats")
export class CatsController {
    constructor(private catsService: CatsService) {}


    @Post()
    //esto es para maejo de excepciones. se usa para personaizar mejor el filtro de exepciones 
    //por defecto no es suficiente cuando se quiere manipular completamente la respuesta y el manejo.
    //se puede usar más de un filtro separandolos por comas
    //Si no se instancia la clase se habilita la inyecion de dependencias.
    @UseFilters(new HttpExceptionFilter())
    async create(@Body() createCatDto:CreateCatDto) {
        throw new HttpException("a", 400)
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        //Nest maneaj las excepciones con su interceptor y devuelve la respuesta al cliente.
        //HTTp exeption recibe 2 argumentos obligatorios.
        //1. response: puede ser un string o un json, es lo que va a recibir el cliente
        //2. status: el status code de la respuesta, se sugiere usar HttpStatus
        //Recibe un argumento opcional
        //options: es un objeto, incluye cause, que representa la causa de la excepcion, esto no se envia al cliente, pero puede ser util.
        throw new ForbiddenExeption()
        // return this.catsService.findAll()
    }

    @Get("ruta")
    findOne():string{
        return "ruta"
    }
}