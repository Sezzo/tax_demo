import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient} from "@angular/common/http";
import { provideEffects } from '@ngrx/effects';
import {provideState, provideStore} from "@ngrx/store";
import {ProductEffects} from "./state/product/product.effects";
import {productReducer} from "./state/product/product.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(),provideStore(), provideState({name: 'products', reducer: productReducer}), provideEffects(ProductEffects)]
};
