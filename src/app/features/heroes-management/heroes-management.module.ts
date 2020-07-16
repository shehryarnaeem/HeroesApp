import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagementRoutingModule } from './heroes-management-routing.module';
import { HeroesListingComponent } from './heroes-listing/heroes-listing.component';
import { HeroesListingDashboardComponent } from './heroes-listing/heroes-listing-dashboard/heroes-listing-dashboard.component';
import { HeroesListingTableComponent } from './heroes-listing/heroes-listing-table/heroes-listing-table.component';
import { NgbNavModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroDetailsModalComponent } from './hero-details-modal/hero-details-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ]
})
export class HeroesManagementModule { }
