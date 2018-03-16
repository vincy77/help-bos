import { Component, OnInit, DoCheck } from '@angular/core';
//import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.less']
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
    //private layoutService: LayoutService
  ) { }
  // expandSubNav(id) {
  //   this.layoutService.setSubNav(id);
  //   this.currentNavId = id;
  //   console.log(id)
  // }
  ngDoCheck() {
    console.log('header ngDoCheck');

  }

  ngOnInit() {
    //this.nav = this.layoutService.getNav();
    console.log(this.currentNavId);
    //this.layoutService.setSubNav(this.currentNavId);
  }

}
