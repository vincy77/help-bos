import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.less']
})
export class ShowcaseComponent implements OnInit {
  categotyNav = [
    {
      id: 11,
      name: '基础',
      subNav: [
        {
          id: 111,
          name: 'button',
          subNav: []
        },
        {
          id: 112,
          name: 'table',
          subNav: []
        }
      ]
    },
    {
      id: 22,
      name: '表单',
      subNav: [
        {
          id: 221,
          name: 'biaodan',
          subNav: []
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
