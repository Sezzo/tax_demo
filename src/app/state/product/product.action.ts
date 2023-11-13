import {createAction, props} from "@ngrx/store";
import {ProductModel} from "../../models/product.model";


export const loadProducts = createAction(
  '[Product] Load products'
)

export const loadProductsSuccessful = createAction(
  '[Products] Products loaded success',
  props<{products: ProductModel[]}>()
)

export const loadProductsError = createAction('[Products] Products loading error')
