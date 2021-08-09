import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landing_page/landingpage.component';
// import { HomepageMainComponent } from './home-page/homepage-main.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'homepage',
    loadChildren: () => import('./home-page/homepage-routing.module').then(m => m.HomepageRoutingModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups-routing.module').then(m => m.GroupsRoutingModule)
  }

  // loadChildren: "./home-page/homepage-routing.module#HomepageRoutingModule"}
]

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule]
})

export class AppRoutingModule { }
