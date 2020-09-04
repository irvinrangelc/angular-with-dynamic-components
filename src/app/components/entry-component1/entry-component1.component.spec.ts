import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponent1Component } from './entry-component1.component';

describe('EntryComponent1Component', () => {
  let component: EntryComponent1Component;
  let fixture: ComponentFixture<EntryComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
