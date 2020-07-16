import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    loadChildren:()=>
    import("./core/navigation/navigation.module").then(
      (m:any)=>m.NavigationModule
    )
  },
  {
    path:"**", redirectTo:"/",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
