import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDescComponent } from './control-desc.component';

describe('ControlDescComponent', () => {
  let component: ControlDescComponent;
  let fixture: ComponentFixture<ControlDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
