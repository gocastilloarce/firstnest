// se puede extender el filtro base.
// Este debe ser implementado sin instanciarcon new
// se deja al framework que lo instancie.

import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}

// Los filtros globales tambien pueden heredar el del filtro base
// se usa el httpAdapter
// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
  
//     const { httpAdapter } = app.get(HttpAdapterHost);
//     app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  
//     await app.listen(3000);
//   }
//   bootstrap();

// o a nivel de modulo se puede usar la forma de siempre
// import { Module } from '@nestjs/common';
// import { APP_FILTER } from '@nestjs/core';

// @Module({
//   providers: [
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//   ],
// })
// export class AppModule {}