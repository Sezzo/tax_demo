import {createAction, props} from "@ngrx/store";
import {ProductState} from "../../models/product.model";


export const loadProducts = createAction(
  '[Product] Load products'
)

export const loadProductsSuccessful = createAction(
  '[Products] Products loaded success',
  props<ProductState>()
)

export const loadProductsError = createAction('[Products] Products loading error')
