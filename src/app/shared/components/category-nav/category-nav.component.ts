import { Component, OnInit, Input, Output, Directive, EventEmitter, ViewChild } from '@angular/core';
import { CategoryNavService } from '../../../core/service/category-nav.service';
import { Router, ActivatedRoute} from '@angular/router';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { NewCategoryComponent} from '../new-category/new-category.component';
import { CategoryTreeComponent} from '../category-tree/category-tree.component';


@Component({
  selector: 'app-category-nav',
  templateUrl: 'category-nav.component.html',
  styleUrls: ['category-nav.component.scss'],
})
export class CategoryNavComponent implements OnInit {
  // @Output() editData = new EventEmitter();
  categoryNav = [];
  activeMenu;
  // modalRef: BsModalRef;
  @ViewChild('categoryTree')
  tree:CategoryTreeComponent;
  constructor(
    private categoryNavService: CategoryNavService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    // private modalService: BsModalService,
  ) { }
  // showEditView1(event,data) {
  //   event.stopPropagation();
  //   console.log('categoryNav');
  //   this.editData.emit(data);
  // }
  /**
  * 获取分类数据
  * */
  getCategory(data: string) {
    this.categoryNavService
      .getCategoryNav3(data)
      .then(res => {
        console.log(res);
        let changeNav = res.data;
        this.changeNavList(changeNav);
        console.log(changeNav.length);
        return this.categoryNav = changeNav;
      });
  }
  /**
  * 添加isOpen参数到分类数组中（展开和收起需要用到）
  * */
  changeNavList(list) {
    list.forEach(item => {
      item.isOpen = false;
      if(item.subNav && item.subNav.length > 0) {
        this.changeNavList(item.subNav);
      }
    });
  }
  /**
  * 新增分类
  * */
  newCategory(event,item) {
    this.tree.newCategory(event, item);
  }
  /**
  * 删除分类
  * */
  // deleteCategory(event, item) {
  //   this.tree.deleteCategory(event, item);
  // }
  back() {

  }
  ngOnInit() {
    console.log(this.router.url);
    console.log(this.activatedRoute);
    let url = this.router.url;
    switch(url)
    {
      case '/rule':
        this.activeMenu = {
          key: 'rule',
          value: '前端代码规范'
        };
        break;
      case '/showcase':
        this.activeMenu = {
          key: 'showcase',
          value: 'SHOWCASE'
        };
        break;
      case '/plugin':
        this.activeMenu = {
          key: 'plugin',
          value: '组件／插件'
        };
        break;
      case '/api':
        this.activeMenu = {
          key: 'api',
          value: 'API'
        };
        break;
      default:
        this.activeMenu = {
          key: 'showcase',
          value: 'SHOWCASE'
        }
    }
    this.getCategory(this.activeMenu.key);
  }
}
