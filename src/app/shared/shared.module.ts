import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule, PaginationModule,  ModalModule, BsDropdownModule, AlertModule} from 'ngx-bootstrap';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';


@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CategoryNavComponent,
    Template1Component,
    Template2Component
    // BrowserAnimationsModule
  ],
  declarations: [Template1Component, Template2Component, CategoryNavComponent]
})
export class SharedModule { }
