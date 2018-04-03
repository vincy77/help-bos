import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppEventEmitService } from '../../../core/service/app-event-emit.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewCategoryComponent} from '../new-category/new-category.component';
import { MyModalService } from '../../../core/modal/my-modal.service';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['category-tree.component.scss'],
})
export class CategoryTreeComponent implements OnInit {
  @Input() directories = [];
  @Input() node; // 计算子节点padding-left间距
  @Input() activeMenu;
  categoryActiveId = 'button';
  modalRef: BsModalRef;
  constructor(
    private categoryEmitService: AppEventEmitService,
    private modalService: BsModalService,
    private myModalService: MyModalService
  ) { }

  showEditView(event,item) {
    console.log(item.id)
    this.categoryActiveId = item.id;

    this.categoryEmitService.categoryEventEmit.emit(item);
    // event.stopPropagation();
    // this.show.next(item);
  }
  newCategory(event,item) {
    console.log(item);
    const initialState = {
      activeMenu: this.activeMenu,
      item: item
    };
    this.modalRef =this.modalService.show(NewCategoryComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
    // 订阅事件
    this.modalRef.content.save.subscribe(res => {
      console.log(res);
      let data = {
        id: '',
        name: res.name,
        isOpen: false,
        subNav: []
      };
      if(item){
        item.subNav.push(data);
      }else{
        this.directories.push(data);
      }
      this.modalRef.hide();
      return res;
    });
    // event.stopPropagation();
    // this.new.emit(item);
  }
  deleteCategory(event, item, list) {
    let that = this;
    this.myModalService.confirmModal('确定删除该分类吗?')
      .then((res) => {
        this.directories = list.filter(sub => {
          return sub.id !== item.id;
        })
      }, (r) => {
        console.log(r);
      });
    // this.delete.emit(item);
  }

  ngOnInit() {
  }

}
