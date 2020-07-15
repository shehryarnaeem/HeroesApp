import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagementRoutingModule } from './heroes-management-routing.module';
import { HeroesListingComponent } from './heroes-listing/heroes-listing.component';
import { HeroesListingViewSelectionComponent } from './heroes-listing/heroes-listing-view-selection/heroes-listing-view-selection.component';
import { HeroesListingDashboardComponent } from './heroes-listing/heroes-listing-dashboard/heroes-listing-dashboard.component';
import { HeroesListingTableComponent } from './heroes-listing/heroes-listing-table/heroes-listing-table.component';


@NgModule({
  declarations: [
    HeroesListingComponent,
    HeroesListingViewSelectionComponent,
    HeroesListingDashboardComponent,
    HeroesListingTableComponent
  ],
  imports: [
    CommonModule,
    HeroesManagementRoutingModule
  ]
})
export class HeroesManagementModule { }
