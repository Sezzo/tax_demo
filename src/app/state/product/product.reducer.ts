import {ProductState} from "../../models/product.model";
import {createReducer, on} from "@ngrx/store";
import {loadProductsSuccessful} from "./product.action";


export const initialState: ProductState = {
  products: []
}


export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccessful, (state, {products}) => ({products}))
);
