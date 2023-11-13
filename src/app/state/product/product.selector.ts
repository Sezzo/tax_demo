import {createSelector} from "@ngrx/store";
import {AppState} from "../../models/state.model";


export const selectProducts = createSelector(
  (state: AppState) => state.productState.products,
  (products) => products
);
