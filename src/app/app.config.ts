import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient} from "@angular/common/http";
import { provideEffects } from '@ngrx/effects';
import {provideStore} from "@ngrx/store";
import {ProductEffects} from "./state/product/product.effects";
import {productReducer} from "./state/product/product.reducer";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {invoiceReducer} from "./state/invoice/invoice.reducer";

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(), provideStore({productState: productReducer, invoiceState: invoiceReducer}), provideEffects(ProductEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
