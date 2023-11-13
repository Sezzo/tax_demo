import {createAction, props} from "@ngrx/store";
import {ProductModel} from "../../models/product.model";


export const getInvoiceProducts = createAction('[Invoice Widget] Get products')

export const addProductToInvoice = createAction(
  '[Invoice Widget] Add product',
  props<ProductModel>()
)

export const removeProductFromInvoice = createAction(
  '[Invoice Widget] Remove product',
  props<ProductModel>()
)
