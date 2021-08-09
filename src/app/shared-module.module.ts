import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LeftpanelComponent,
    RightpanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[LeftpanelComponent, RightpanelComponent]
})
export class SharedModuleModule { }
