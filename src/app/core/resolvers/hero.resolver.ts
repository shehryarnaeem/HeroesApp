import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

// Services
import { HeroesManagementService } from "../http-services/heroes-management/heroes-management.service";

// Interface
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroResolver implements Resolve<Hero[]>{
    constructor(private heroService:HeroesManagementService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.heroService.getHeroesList();    
    }

}
