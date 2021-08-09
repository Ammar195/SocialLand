import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPostsComponent } from './user-posts/user-posts.component';
import { HomepageMainComponent } from './homepage-main.component';
import { SharedModuleModule } from '../shared-module.module';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { CreateQuestionairComponent } from './create-questionair/create-questionair.component';
import { FriendSuggestionsComponent } from './friend-suggestions/friend-suggestions.component';
import { FriendSuggestionListMobileComponent } from './friend-suggestion-list-mobile/friend-suggestion-list-mobile.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomepageMainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: TimelineComponent },
      { path: 'questionair', component: CreateQuestionairComponent },
      { path: 'friends-suggestions', component: FriendSuggestionsComponent }
    ]
  },
]

@NgModule({
  declarations: [
    HomepageMainComponent,
    HomeComponent,
    TimelineComponent,
    CreateQuestionairComponent,
    UserPostsComponent,
    FriendSuggestionsComponent,
    FriendSuggestionListMobileComponent
  ],

  imports: [
    SharedModuleModule,
    RouterModule.forChild(homeRoutes)
  ],

  exports: [RouterModule]
})

export class HomepageRoutingModule { }