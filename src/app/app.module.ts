import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';

import { MyAlertComponent } from './core/my-alert/my-alert.component';
// import { ConfirmComponent } from './core/modal/confirm/confirm.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAlertComponent,
    LoginComponent,
    // ConfirmComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  // 需要动态加载的组件名
  entryComponents: [
    MyAlertComponent,
    // ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
