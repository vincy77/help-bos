import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule} from 'ngx-bootstrap';
import { Template1Component } from './components/template1/template1.component';
import { Template2Component } from './components/template2/template2.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { CategoryTreeComponent } from './components/category-tree/category-tree.component';
import { ShowAuthedDirective } from './directive/show-authed.directive';
import { ControlDescComponent } from './components/control-desc/control-desc.component';
import { DisplayDirective } from './directive/display.directive';
import { NewCategoryComponent } from './components/new-category/new-category.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  declarations: [
    Template1Component,
    Template2Component,
    CategoryNavComponent,
    CategoryTreeComponent,
    ShowAuthedDirective,
    ControlDescComponent,
    DisplayDirective,
    NewCategoryComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule,
    CategoryNavComponent,
    Template1Component,
    Template2Component,
    CategoryTreeComponent,
    ShowAuthedDirective,
    ControlDescComponent,
    DisplayDirective,
    NewCategoryComponent
    // BrowserAnimationsModule
  ],
  entryComponents: [
    NewCategoryComponent
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
