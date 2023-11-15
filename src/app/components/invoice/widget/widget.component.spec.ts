import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import {StoreModule} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../../../state/invoice/invoice.reducer";

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetComponent, ],
      providers: [provideMockStore({initialState})]
    });
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
