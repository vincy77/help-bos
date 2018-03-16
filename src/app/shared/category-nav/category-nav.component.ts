import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.less']
})
export class CategoryNavComponent implements OnInit {
  @Input() categoryNav: Object = [];

 // @Input categoryNav: Array = []
  constructor() { }

  ngOnInit() {
  }

}
