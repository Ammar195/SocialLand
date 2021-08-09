// ********** MODULES ****************************************
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// ********** SERVICES **************************************


// ********** COMPONENTS *************************************
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landing_page/landingpage.component';
import { LoginComponent } from './landing_page/login/login.component';
import { RegistrationComponent } from './landing_page/registration/registration.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home-page/home/home.component';
import { TimelineComponent } from './home-page/timeline/timeline.component';
import { CreateQuestionairComponent } from './home-page/create-questionair/create-questionair.component';
// import { UserPostsComponent } from './home-page/user-posts/user-posts.component';
import { GroupCreateComponent } from './groups/group-create/group-create.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { UserAccountsComponent } from './landing_page/user-accounts/user-accounts.component';
import { FriendSuggestionsComponent } from './home-page/friend-suggestions/friend-suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorpageComponent,
    // HomeComponent,
    // TimelineComponent,
    // CreateQuestionairComponent,
    // UserPostsComponent,
    // GroupCreateComponent,
    // GroupListComponent,
    // GroupDetailComponent,
    UserAccountsComponent,
    // FriendSuggestionsComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
