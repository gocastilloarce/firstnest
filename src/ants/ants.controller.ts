import { ParseIntPipe, ValidationPipe } from "@nestjs/common";
import { Controller, Get, Post, Body, Param, UseGuards, SetMetadata } from "@nestjs/common/decorators";
import { AntsService } from "./ants.service";
import { Roles } from "./decorators/roles.decorator";
import { CreateAntDTO } from "./dtos/create-ant.dto";
import { RolesGuard } from "./guards/roles.guard";

@Controller('ants')
//Guard a nivel de controladr
@UseGuards(RolesGuard)
export class AntsController {
    constructor(private antsService:AntsService){}
    @Post()
    @Roles('admin')
    create(@Body(ValidationPipe) ant:CreateAntDTO){
        return this.antsService.create(ant)
    }
    //guard a nivel de metodo
    // @UseGuards(RolesGuard)
    @Get()
    findAll(){
        return this.antsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.antsService.findOne(id)
    }
}



//Orden de ejecucion en enst:
//1. Middleware
//2. Guards
//3. Pipes.
//4. Interceptors.
//5. Controller.
//6. Exception Filter