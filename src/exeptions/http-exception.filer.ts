import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

//para procesar todas las excepciones sin importar el tipo se debe dejar @Catch() sin argumento.
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    //exception representa a la excepcion en si
    //host es una utilidad que permite acceder a distintas cosas coo request y response en este caso.
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message:"este mensaje viene del http exception filter"
      });
  }
}