import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { SharedModule } from '../shared/shared.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';

import { ShowcaseComponent } from './showcase.component';
import { HButtonComponent } from './h-button/h-button.component';
/**
 * http service
 * */
import { ShowcaseService } from './showcase.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ShowcaseRoutingModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    ShowcaseService
  ],
  declarations: [ShowcaseComponent, HButtonComponent]
})
export class ShowcaseModule { }
