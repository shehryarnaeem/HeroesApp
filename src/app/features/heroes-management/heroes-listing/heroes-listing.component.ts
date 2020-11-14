import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {HeroesManagementService} from "../../../core/http-services/heroes-management/heroes-management.service";
import { Hero } from 'src/app/core/models/hero.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-listing',
  templateUrl: './heroes-listing.component.html',
  styleUrls: ['./heroes-listing.component.css']
})
export class HeroesListingComponent implements OnInit,OnDestroy {

  active="dashboard"
  heroes:Hero[]=[]
  private subscriptions:Subscription=new Subscription();

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }
  
 
  ngOnInit()
  : void {

    this.getHeroes();

  }


  ngOnDestroy()
  : void {
    this.subscriptions.unsubscribe();
  }


  getHeroes()
  : void {
    this.heroes = this.activatedRoute.snapshot.data.heroes as Hero[];
    console.log(this.heroes)
  }


}
