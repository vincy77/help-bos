import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { ModalModule } from './modal/modal.module';
// 全局的单例服务
import { LayoutService } from './layout.service';
import { MyAlertService } from './my-alert.service';


//只加载一次的组件
import {HeaderComponent} from './layout/header/header.component';
import {NavComponent} from './layout/nav/nav.component';
import {ToastBoxComponent} from './modal/toast-box/toast-box.component';
import { ToastComponent } from './modal/toast/toast.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ModalModule
  ],
  exports: [
    FormsModule,
    AppRoutingModule,
    HeaderComponent,
    NavComponent,
    ToastBoxComponent,
    ToastComponent
  ],
  providers: [
    MyAlertService,
    LayoutService,
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    ToastBoxComponent,
    ToastComponent
  ]
})
export class CoreModule { }
