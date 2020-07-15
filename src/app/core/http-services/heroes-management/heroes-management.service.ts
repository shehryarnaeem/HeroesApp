import { Injectable } from '@angular/core';
import {Hero} from "../../models/hero.model";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroesManagementService {

  private heroes:Hero[]=[
    {
      id:1,
      name:"Iron Man",
      score:100
    },
    {
      id:2,
      name:"Bat Man",
      score:100
    }
  ]


  constructor() { }


  public getHeroesList()
  :Observable<Hero[]>{
    return of(this.heroes)
  }
}
