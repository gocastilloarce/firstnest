import { NestFactory } from '@nestjs/core';
import { RolesGuard } from './ants/guards/roles.guard';
// import { CatsModule } from './cats/cats.module';
// import { DogsModule } from './dogs/dogs.module';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger_funtional.middleware';
import { ClassValidationPipe } from './reptiles/pipes/validation.pipe';
// import { HttpExceptionFilter } from './exeptions/http-exception.filer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //middleware global
  // app.use(logger)
  //se puede usar filtros de exepcion de manera global
  //este enfoque no acepta inyeccion de dependencias
  //app.useGlobalFilters(new HttpExceptionFilter())
  //pipes dealcance global
  //en apps hibridas hay ciertas cosas, ver documentacion https://docs.nestjs.com/pipes#class-validator
  // app.useGlobalPipes(new ClassValidationPipe())
  // usando guard global
  // En apps hibridas no se aplica a gateways ni a microservicios
  // app.useGlobalGuards(new RolesGuard())
  await app.listen(3000);
}
bootstrap();
