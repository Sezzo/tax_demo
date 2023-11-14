import {createSelector} from "@ngrx/store";
import {AppState} from "../../models/state.model";


export const getProductCount = createSelector(
  (state: AppState) => state.invoiceState.products,
  (products) => products.map(p => p.amount).reduce((a, b) => a + b, 0)
);


export const getInvoiceProducts = createSelector(
  (state: AppState) => state.invoiceState.products,
  (products) => products
);
