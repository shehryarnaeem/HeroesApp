import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbModalModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HeroesManagementRoutingModule } from './heroes-management-routing.module';
import { HeroesListingComponent } from './heroes-listing/heroes-listing.component';
import { HeroesListingDashboardComponent } from './heroes-listing/heroes-listing-dashboard/heroes-listing-dashboard.component';
import { HeroesListingTableComponent } from './heroes-listing/heroes-listing-table/heroes-listing-table.component';
import { HeroDetailsModalComponent } from './hero-details-modal/hero-details-modal.component';


@NgModule({
  declarations: [
    HeroesListingComponent,
    HeroesListingDashboardComponent,
    HeroesListingTableComponent,
    HeroDetailsModalComponent
  ],
  imports: [
    CommonModule,
    HeroesManagementRoutingModule,
    NgbNavModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgbAlertModule
  ]
})
export class HeroesManagementModule { }
