import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HAnimationComponent } from './h-animation.component';

describe('HAnimationComponent', () => {
  let component: HAnimationComponent;
  let fixture: ComponentFixture<HAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
