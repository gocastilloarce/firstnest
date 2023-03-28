import { Module, Global } from '@nestjs/common';
import { CatsController, AccountController } from './cats.controller';
import { CatsService } from './cats.service';

//Por defecto nest hace que los modulos no sean globales
//se usa este decorador para hacerlo globar
//de este modo otro modulo puede usar sus providers sin tener que incluir este modulo entre sus imports.
@Global()
@Module({
  imports: [],
  controllers: [CatsController, AccountController],
  providers: [CatsService],
  //se puede exportar partes del modulo y tambien se puede exportar un modulo importado (re-exporting)
  exports:[CatsService],
})
export class CatsModule {
  //se puede inyectar providers pero no imports u otros modulos para evitar dependencia circular.
  constructor(private catsService:CatsService){}
}

//Modulos dinamicos
//Estos se crean segun las condiciones
// E J
// import { Module, DynamicModule } from '@nestjs/common';
// import { createDatabaseProviders } from './database.providers';
// import { Connection } from './connection.provider';

// @Module({
//   providers: [Connection],
// })
// export class DatabaseModule {
//   static forRoot(entities = [], options?): DynamicModule {
//     const providers = createDatabaseProviders(options, entities);
//     return {
//       module: DatabaseModule,
//       providers: providers,
//       exports: providers,
//     };
//   }
// }

// en la funcion forRoot se crean los providers segun los criterios de options y entities
// y retorna los datos calculado, esto hace que los providers se agreguen
// sin sustituirse a los providers estaticos. se upede hacer global el  modulo dinamico agregando global:true en el retorno de la funcion


// se importa de esta manera el modulo dinamico
// import { Module } from '@nestjs/common';
// import { DatabaseModule } from './database/database.module';
// import { User } from './users/entities/user.entity';

// @Module({
//   imports: [DatabaseModule.forRoot([User])],
//   exports: [DatabaseModule],
// })
// export class AppModule {}

