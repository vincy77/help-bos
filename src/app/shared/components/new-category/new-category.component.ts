import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  @Input() activeMenu;
  @Input() item;
  @Output() save = new EventEmitter();
  newCategoryDate = {};
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }



  saveNewCategory() {
    event.stopPropagation();
    this.save.emit(this.newCategoryDate);
  }
}
