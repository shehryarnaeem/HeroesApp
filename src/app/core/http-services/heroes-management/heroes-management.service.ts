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
      score:500
    },
    {
      id:1,
      name:"Super Man",
      score:100
    },
    {
      id:2,
      name:"Magneto Man",
      score:500
    },
    {
      id:1,
      name:"Wolveriene",
      score:100
    },
    {
      id:2,
      name:"Spider Man",
      score:500
    }
  ]


  constructor() { }


  public getHeroesList()
  : Observable<Hero[]> {

    return of(this.heroes)

  }


  public getTopHeroes(nHeroes:number=this.heroes.length)
  : Observable<Hero[]> {

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
}
