import { Injectable } from "@nestjs/common";
import { Reptil } from "./interfaces/reptiles.interface";
@Injectable()
export class ReptilesService {
    private readonly reptiles: Reptil[] = [];

    create(reptil: Reptil) {
        this.reptiles.push(reptil)
    }

    findAll():Reptil[] {
        return this.reptiles
    }

    findAllActive({activeOnly, page}):Reptil[] {
        return this.reptiles
    }

    findOne(index:number):Reptil {
        return this.reptiles[index]
    }
}