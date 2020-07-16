import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Hero } from 'src/app/core/models/hero.model';
import { HeroDetailsModalComponent } from '../../hero-details-modal/hero-details-modal.component';

@Component({
  selector: 'app-heroes-listing-table',
  templateUrl: './heroes-listing-table.component.html',
  styleUrls: ['./heroes-listing-table.component.css']
})
export class HeroesListingTableComponent implements OnInit {

  @Input()
  heroes:Hero[]=[];

  constructor(
    private modalService:NgbModal
  ) { }

  ngOnInit()
  : void {
  }

  onEdit(hero:Hero)
  : void {
    const modalRef=this.modalService.open(HeroDetailsModalComponent);
    modalRef.componentInstance.hero=hero;
  }

}
