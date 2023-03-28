import {
    Body,
    Controller,
    Get,
    Post,
    Query,
    ParseBoolPipe,
    DefaultValuePipe,
    ParseIntPipe
} from '@nestjs/common'
import { Param } from '@nestjs/common/decorators';
import { CreateReptilDto } from './dto/create-reptiles.dto';
import { Reptil } from './interfaces/reptiles.interface';
import { ClassValidationPipe } from './pipes/validation.pipe';
import { ReptilesService } from './reptiles.service';

@Controller('reptiles')
export class ReptilesController {
    constructor(private reptilesService: ReptilesService) { }
    @Get()
    findAll(): Reptil[] {
        return this.reptilesService.findAll()
    }
    @Post()
    create(@Body(new ClassValidationPipe()) reptil: CreateReptilDto) {
        return this.reptilesService.create(reptil)
    }

    //para tener valores por defecto se usa DefaultValuePipe antes  de los transform pipes
    @Get("active")
    async findAllActive(
        @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,
        @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number
    ) {
        console.log("query",activeOnly, page)
        return this.reptilesService.findAllActive({activeOnly, page})
    }
    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.reptilesService.findOne(id)
    }
}