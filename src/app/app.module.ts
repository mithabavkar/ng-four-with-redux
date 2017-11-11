import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { reducer } from './reducers';
//import {metaReducer} from "./reducers/index";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalHomePageComponent } from './global-home-page/global-home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { GlobalSharedServiceService } from'./services/global-shared-service.service';
import { SavingAccountComponent } from './accounts/saving-account/saving-account.component';
import { CurrentAccountComponent } from './accounts/current-account/current-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GlobalHomePageComponent,
    SideBarComponent,
    SavingAccountComponent,
    CurrentAccountComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true, // <-- debugging purposes only
    //     useHash: true } 
    // )
  ],
  providers: [GlobalSharedServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
