import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Hero} from "../../models/hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroesManagementService {

   public heroes:Hero[] = [
    {
      id:1,
      name:"Iron Man",
      score:100
    },
    {
      id:2,
      name:"Bat Man",
      score:500
    },
    {
      id:3,
      name:"Super Man",
      score:100
    },
    {
      id:4,
      name:"Magneto Man",
      score:500
    },
    {
      id:5,
      name:"Wolveriene",
      score:100
    },
    {
      id:6,
      name:"Spider Man",
      score:500
    }
  ]


  constructor() { }


  public getHeroesList()
  : Promise<Hero[]> {

    return of(this.heroes).toPromise();

  }


  public getTopHeroes(nHeroes:number=this.heroes.length)
  : Observable<Hero[]> {

    if(nHeroes>this.heroes.length) nHeroes=this.heroes.length

    let heroes:Hero[]=this.heroes.sort((a:Hero,b:Hero)=>{
      return b.score-a.score
    })


    return of(heroes.slice(0,nHeroes));

  }


  public addNewHero(hero:Hero)
  : void {

    hero.id = this.heroes.length+1;
    this.heroes.push(hero);

  }


  public editHero(hero:Hero)
  : void {
    
    let index:number = this.heroes.findIndex(item=> item.id==hero.id)
    if(index>-1) this.heroes[index]=hero;
    
  }


  public deleteHeroByID(id:number)
  : void {

    let index:number = this.heroes.findIndex(item=>item.id == id)

    if(index > -1) this.heroes.splice(index,1)

  }
  
}
