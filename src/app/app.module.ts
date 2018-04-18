import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

import { SideBarComponent } from './sidebar/sidebar.component';
import { GearsComponent } from './gears/gears.component';
import { HealthChecksComponent } from './healthChecks/healthChecks.component';
import { HealthChecksContentComponent } from './healthChecks-content/healthChecks-content.component';
import { HealthCheckComponent } from './healthCheck/healthCheck.component';
import { StatsComponent } from './stats-content/stats-content';
import { TimerComponent } from './timer/timer.component'

import { SquadsComponent } from './squads/squads.component';
import { TopicsComponent } from './topics/topics.component';
import { SquadDetailComponent } from './squad-detail/squad-detail.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { GearsService } from './services/gears.service';
import { SquadService } from './services/squad.service';
import { TopicService } from './services/topic.service';
import { HealthCheckService } from './services/healthCheck.service';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountdownPipe } from './pipes/countdown-pipe';

const appRoutes: Routes = [
  { path: 'healthChecks', component: HealthChecksComponent },
  { path: 'newHealthCheck', component: HealthCheckComponent },
  { path: 'squads',      component: SquadsComponent },
  { path: 'squads/detail/:id', component: SquadDetailComponent },
  { path: 'topics',      component: TopicsComponent },
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
    HealthChecksContentComponent,
    HealthCheckComponent,
    StatsComponent,
    SquadsComponent,
    TopicsComponent,
    SquadDetailComponent,
    PageNotFoundComponent,
    TimerComponent,
    CountdownPipe
  ],
  imports: [
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [GearsService, SquadService, TopicService, HealthCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
