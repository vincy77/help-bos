import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {isCombinedNodeFlagSet} from "tslint";
@Component({
  selector: 'app-template1',
  templateUrl: 'template1.component.html',
  styleUrls: ['template1.component.scss']
})
export class Template1Component implements OnInit {
  @Input() case;
  @Output() editCase = new EventEmitter();
  @Output() deleteCase = new EventEmitter();
  constructor(
    private sanitizer: DomSanitizer
  ) { }
  exam;

  edit(item) {
    this.editCase.emit(item);
  }
  delete(item) {
    this.deleteCase.emit(item);
  }

  ngOnInit() {
    console.log(this.case);
    this.exam = this.sanitizer.bypassSecurityTrustHtml(this.case.html);
  }

}
