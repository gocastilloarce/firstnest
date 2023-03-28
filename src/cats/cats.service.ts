import { HttpException, Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat:Cat) {
        this.cats.push(cat);
    }
    findAll():Cat[] {
        throw new HttpException("a", 404)
        return this.cats;
    }
}

/*
    INYECCION DE DEPENDENCIAS
    Nest manejará la instacia que sea inyectable, y creará la instancia en el manejador
    de las dependencias, si existe lo inyecta, si no existe lo crea y lo inyecta.

*/