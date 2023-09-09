import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderListComponent } from './my-orders.component';

describe('MyOrdersComponent', () => {
  let component: MyOrderListComponent;
  let fixture: ComponentFixture<MyOrderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrderListComponent]
    });
    fixture = TestBed.createComponent(MyOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
