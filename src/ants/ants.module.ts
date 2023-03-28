import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AntsController } from "./ants.controller";
import { AntsService } from "./ants.service";
import { RolesGuard } from "./guards/roles.guard";

@Module({
    controllers:[AntsController],
    providers:[AntsService, {
        provide: APP_GUARD,
        useClass: RolesGuard,
    }]
})
export class AntsModule{}