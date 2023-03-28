import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/exeptions/all-exception.filter';
import { HttpExceptionFilter } from 'src/exeptions/http-exception.filer';
import { DogsController } from './dogs.controller';


@Module({
  imports: [],
  controllers: [DogsController],
  // se puede poner el filtro de exceptiones a nivel de modulo usando esta forma
  // esto permite la inyeccion de dependencias, se puede agregar cuantos filtros 
  // se quiera agregando nuevos objetos provider.
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // }
  ],
})
export class DogsModule { }