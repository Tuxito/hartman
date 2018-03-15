import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

import { SideBarComponent } from './sidebar/sidebar.component';
import { GearsComponent } from './gears/gears.component';
import { HealthChecksComponent } from './healthChecks/healthChecks.component';
import { SquadsComponent } from './squads/squads.component';
import { SquadDetailComponent } from './squad-detail/squad-detail.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { GearsService } from './gears/shared/gears.service';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'healthChecks', component: HealthChecksComponent },
  { path: 'squads',      component: SquadsComponent },
  { path: 'squads/detail/:id', component: SquadDetailComponent },
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
    SquadDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [GearsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
