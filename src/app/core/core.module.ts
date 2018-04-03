import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { ModalModule } from './modal/modal.module';

// 全局的单例服务
// import { LayoutService } from './layout.service';
// import { MyAlertService } from './my-alert.service';
import { CategoryNavService } from './service/category-nav.service';
/*订阅分类导航点击事件*/
import { AppEventEmitService } from './service/app-event-emit.service';
import { UserService } from './service/user.service';
import { JwtService } from './service/jwt.service';
import { NeedAuthGuard } from './service/no-auth-guard.service';


//只加载一次的组件
import {HeaderComponent} from './layout/header/header.component';
// import {NavComponent} from './layout/nav/nav.component';
import {ToastBoxComponent} from './modal/toast-box/toast-box.component';
import { ToastComponent } from './modal/toast/toast.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ModalModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [
    FormsModule,
    AppRoutingModule,
    HeaderComponent,
    // NavComponent,
    ToastBoxComponent,
    ToastComponent
  ],
  providers: [
    // MyAlertService,
    // LayoutService,
    CategoryNavService,
    AppEventEmitService,
    UserService,
    JwtService,
    NeedAuthGuard
  ],
  declarations: [
    HeaderComponent,
    // NavComponent,
    ToastBoxComponent,
    ToastComponent
  ]
})
export class CoreModule { }
