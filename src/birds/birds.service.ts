import { Injectable } from "@nestjs/common";
import { Bird } from "./interfaces/birds.interface";

@Injectable()
export class BirdsService {
    private readonly birds: Bird[] = [];

    create(bird:Bird) {
        this.birds.push(bird);
    }
    findAll():Bird[] {
        return this.birds;
    }
    findOne(index:number):Bird {
        return this.birds[index]
    }
}