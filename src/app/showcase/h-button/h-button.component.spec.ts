import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HButtonComponent } from './h-button.component';

describe('HButtonComponent', () => {
  let component: HButtonComponent;
  let fixture: ComponentFixture<HButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
