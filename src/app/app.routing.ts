import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalHomePageComponent } from './global-home-page/global-home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const APP_ROUTE: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full'},
    { path:'home', component:GlobalHomePageComponent, data: {title: 'Home Page'}}
];

export const routing = RouterModule.forRoot(APP_ROUTE,{ enableTracing: true });