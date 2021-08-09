import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module.module';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupsComponent } from './groups.component';
import { GroupListMobileComponent } from './group-list-mobile/group-list-mobile.component';


const groupsRoutes: Routes = [
  { path: 'mygroups', component: GroupsComponent }
]

@NgModule({
  declarations: [
      GroupsComponent,
      GroupListComponent,
      GroupDetailComponent,
      GroupCreateComponent,
      GroupListMobileComponent
  ],

  imports: [
    SharedModuleModule,
    RouterModule.forChild(groupsRoutes)
  ],

  exports: [RouterModule]
})

export class GroupsRoutingModule { }