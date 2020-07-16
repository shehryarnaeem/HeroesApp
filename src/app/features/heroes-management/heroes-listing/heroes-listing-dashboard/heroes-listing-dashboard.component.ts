import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HeroDetailsModalComponent } from '../../hero-details-modal/hero-details-modal.component';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';


@Component({
  selector: 'app-heroes-listing-dashboard',
  templateUrl: './heroes-listing-dashboard.component.html',
  styleUrls: ['./heroes-listing-dashboard.component.css']
})
export class HeroesListingDashboardComponent implements OnInit,OnDestroy {

  public heroes:Hero[] = [];
  private subscriptions:Subscription = new Subscription();
  
  constructor(
    private heroService:HeroesManagementService,
    private modalService:NgbModal
  ) { }


  ngOnInit()
  : void {

    this.getHeroes();

  }


  ngOnDestroy()
  : void {

    this.subscriptions.unsubscribe();
  
  }


  private getHeroes()
  : void {

    let subs$ = this.heroService.getTopHeroes(4).subscribe((res:Hero[])=>{
      this.heroes = res;
    })

    this.subscriptions.add(subs$);

  }


  public onCardClicked(hero:Hero)
  : void {

    const modalRef = this.modalService.open(HeroDetailsModalComponent);
    modalRef.componentInstance.hero = hero;

    modalRef.result.then((res)=>{
      if(res) this.getHeroes();
    })
    
  }


}
