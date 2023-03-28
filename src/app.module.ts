import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { BirdsModule } from './birds/birds.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { logger } from './middlewares/logger_funtional.middleware';
import { ReptilesModule } from './reptiles/reptiles.module';
import { AntsModule } from './ants/ants.module';


@Module({
  imports: [BirdsModule, CatsModule, DogsModule, ReptilesModule, AntsModule],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude("cats/ruta")
    .forRoutes('cats')
    ;
  }
}


//Se puede aplicar middlewares de funcion
//Solo son recomendables si el middleware no tiene dependencias.
// export class AppModule implements NestModule {
//   async configure(consumer: MiddlewareConsumer) {
//     consumer
//     .apply(logger)
//     .exclude("cats/ruta")
//     .forRoutes('cats')
//     ;
//   }
// }


// Se puede especificar el metodo para la ruta (GET, POST, ...) en forRoutes
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({ path: 'cats', method: RequestMethod.GET });
//   }
// }

//For routes puede aceptar un string, varios strings, un objeto RouteInfo, una clase controlador y multiples clases controlador.