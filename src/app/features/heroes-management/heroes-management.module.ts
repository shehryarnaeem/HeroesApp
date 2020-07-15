import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagementRoutingModule } from './heroes-management-routing.module';
import { HeroesListingComponent } from './heroes-listing/heroes-listing.component';
import { HeroesListingDashboardComponent } from './heroes-listing/heroes-listing-dashboard/heroes-listing-dashboard.component';
import { HeroesListingTableComponent } from './heroes-listing/heroes-listing-table/heroes-listing-table.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeroesListingComponent,
    HeroesListingDashboardComponent,
    HeroesListingTableComponent
  ],
  imports: [
    CommonModule,
    HeroesManagementRoutingModule,
    NgbNavModule
  ]
})
export class HeroesManagementModule { }
