import { Injectable } from "@nestjs/common";
import { Ant } from "./interfaces/ants.interface";

@Injectable()
export class AntsService {
    private readonly ants:Ant[] = [];
    findAll(){
        return this.ants
    }
    findOne(id:number) {
        return this.ants[id]
    }
    create(ant:Ant){
        this.ants.push(ant)
    }
}