import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


import { Hero } from 'src/app/core/models/hero.model';
import { HeroDetailsModalComponent } from '../../hero-details-modal/hero-details-modal.component';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';
import {DELETE_SUCCESS} from "src/app/shared/constants/heroes.constants";
@Component({
  selector: 'app-heroes-listing-table',
  templateUrl: './heroes-listing-table.component.html',
  styleUrls: ['./heroes-listing-table.component.css']
})
export class HeroesListingTableComponent implements OnInit {

  @Input()
  public heroes:Hero[]=[];

  constructor(
    private modalService:NgbModal,
    private heroService:HeroesManagementService,
    private toastService:ToastrService
  ) { }

  ngOnInit()
  : void {
  }

  public onEdit(hero:Hero)
  : void {

    const modalRef=this.modalService.open(HeroDetailsModalComponent);
    modalRef.componentInstance.hero=hero;

  }

  public onDelete(id:number)
  : void {

    this.heroService.deleteHeroByID(id);
    this.toastService.success(DELETE_SUCCESS);

  }


  public onAdd()
  : void {

    const modalRef=this.modalService.open(HeroDetailsModalComponent);

  }

}
