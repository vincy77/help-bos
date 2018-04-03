import { Component, OnInit, DoCheck } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  nav = [
    {
      id: 1,
      name: '前端代码规范',
      link: '/rule'
    },
    {
      id: 2,
      name: 'SHOWCASE',
      link:'/showcase'
    },
    {
      id: 3,
      name: '组件／插件',
      link: '/plugin'
    },
    {
      id: 4,
      name: 'API',
      link: '/api'
    }
  ];
  currentNavId = 1;
  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngDoCheck() {
    // console.log('header ngDoCheck');

  }
  logout(){
    this.userService.clearAuth();
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
    //this.nav = this.layoutService.getNav();
    // console.log(this.currentNavId);
    //this.layoutService.setSubNav(this.currentNavId);
  }

}
