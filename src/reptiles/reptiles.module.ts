import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ClassValidationPipe } from './pipes/validation.pipe';
import { ReptilesController } from './reptiles.controller';
import { ReptilesService } from './reptiles.service';

@Module({
    controllers: [ReptilesController],
    providers: [ReptilesService,
        //un pipe global
        // {
        //     provide: APP_PIPE,
        //     useClass: ClassValidationPipe
        // }
    ]
})
export class ReptilesModule { }
