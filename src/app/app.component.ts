import { Component, ViewChild, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';
// import { MyAlertService } from './core/my-alert.service';
import {UserService} from "./core/service/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  isSingle;
  // 设置一个全局模版变量，用于公用alert插入组件
  // @ViewChild("appContent", { read: ViewContainerRef })
  // container: ViewContainerRef;

  constructor(
    // private myAlertService: MyAlertService,
    private userService: UserService

  ) {}

  ngAfterViewInit(){
    // this.myAlertService.getTemplate(this.container);
  }
  ngOnInit(): void {
    this.userService.populate();
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated)=>{
        this.isSingle = !isAuthenticated;
      }
    )
  }
}
