import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceComponent } from './invoice.component';
import {StoreModule} from "@ngrx/store";

describe('InvoiceComponent', () => {
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InvoiceComponent, StoreModule.forRoot({})]
    });
    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
