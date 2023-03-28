import { HttpStatus, ParseIntPipe, UsePipes } from "@nestjs/common";
import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { BirdsService } from "./birds.service";
import { CreateBirdDto, createBirdSchema } from "./dto/create-bird.dto";
import { JoiValidationPipe } from "./pipes/validation.pipe";

@Controller('birds')
export class BirdsController {
    constructor(private birdsService: BirdsService) { }
    @Post()
    //Esto es objec schema validation usando Joi
    //La lista de pipes se ejecutan sobre todos los arguemntos del metodo
    @UsePipes(new JoiValidationPipe(createBirdSchema))
    create(@Body() bird: CreateBirdDto) {
        this.birdsService.create({ ...bird })
    }

    //Truco que no se si es correcto
    // create(@Body(undefined, new JoiValidationPipe(createBirdSchema)) bird: CreateBirdDto) {
    //     this.birdsService.create({ ...bird })
    // }
    @Get()
    findAll() {
        return this.birdsService.findAll()
    }
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        console.log("id", id)
        return this.birdsService.findOne(id)
    }
    @Get("find/:id")
    findOne2(@Param("id", ParseIntPipe) id: number) {
        return this.birdsService.findOne(id)
    }
}