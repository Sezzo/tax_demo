import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent, StoreModule.forRoot({}), RouterModule.forRoot([])]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'tax' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tax');
  });
});
