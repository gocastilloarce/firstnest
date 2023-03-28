import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import {Observable} from 'rxjs'

@Injectable()
export class RolesGuard implements CanActivate {
    constructor (private reflector: Reflector){}
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        let expected=this.reflector.get('roles',context.getHandler())
        if(!expected) return true
        return matchRoles(["admin1", "admin2"], expected)
    }
}

const matchRoles=(roles:string[], expected:string[])=>{
    return expected.every((role)=>roles.includes(role))
}

//los guards pueden tener alcance de metodo, de controlador o global.