import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

import { SideBarComponent } from './sidebar/sidebar.component';
import { GearsComponent } from './gears/gears.component';
import { HealthChecksComponent } from './healthChecks/healthChecks.component';
import { SquadsComponent } from './squads/squads.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';


import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'healthChecks', component: HealthChecksComponent },
  { path: 'squads',      component: SquadsComponent },
  { path: 'gears',      component: GearsComponent },
  { path: '',    redirectTo: '/healthChecks',    pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    GearsComponent,
    HealthChecksComponent,
    SquadsComponent,
    PageNotFoundComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
