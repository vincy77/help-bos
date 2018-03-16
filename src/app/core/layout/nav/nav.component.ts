import { Component, OnInit, DoCheck , OnChanges} from '@angular/core';
import { LayoutService } from '../../layout.service';


@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.less']
})
export class NavComponent implements OnChanges, OnInit, DoCheck {
  currentNav;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnChanges(changes) {

    console.log('ngOnChanges');

  }
  ngOnInit() {
    this.currentNav = this.layoutService.getSubNav();
    console.log(this.currentNav);
  }
  // 了解下组件生命周期 钩子函数
  ngDoCheck() {
    console.log('nav ngDoCheck');
    this.currentNav = this.layoutService.getSubNav();

  }
}
