import { Component, OnInit } from '@angular/core';
import {HeroesManagementService} from "../../../core/http-services/heroes-management/heroes-management.service";
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'app-heroes-listing',
  templateUrl: './heroes-listing.component.html',
  styleUrls: ['./heroes-listing.component.css']
})
export class HeroesListingComponent implements OnInit {

  active="dashboard"
  constructor(
    private heroService:HeroesManagementService
  ) { }

  ngOnInit()
  : void {

    this.heroService.getHeroesList().subscribe((res:Hero[])=>{
    
      console.log(res);
      
    })

  }

}
