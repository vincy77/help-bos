import { Directive, ElementRef, HostListener, OnInit, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective implements OnInit, AfterViewInit{
  @Input() node;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.displayStyle('inline-block', '#f0f8fc');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.displayStyle('none', '');
  }
  ngAfterViewInit() {
    this.el.nativeElement.children[0].style['padding-left'] = (this.node * 15) + 'px';
  }
  ngOnInit() {

  }

  private displayStyle(s: string, b: string) {
    this.el.nativeElement.children[1].style.display = s;
    this.el.nativeElement.style.backgroundColor = b;
  }
}
