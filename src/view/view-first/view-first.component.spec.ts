import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFirstComponent } from './view-first.component';

describe('ViewFirstComponent', () => {
  let component: ViewFirstComponent;
  let fixture: ComponentFixture<ViewFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
