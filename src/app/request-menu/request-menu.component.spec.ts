import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMenuComponent } from './request-menu.component';

describe('RequestMenuComponent', () => {
  let component: RequestMenuComponent;
  let fixture: ComponentFixture<RequestMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
