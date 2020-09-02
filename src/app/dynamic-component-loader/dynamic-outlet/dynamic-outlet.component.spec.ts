import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOutletComponent } from './dynamic-outlet.component';

describe('DynamicOutletComponent', () => {
  let component: DynamicOutletComponent;
  let fixture: ComponentFixture<DynamicOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
