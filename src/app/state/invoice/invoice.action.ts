import {createAction, props} from "@ngrx/store";
import {InvoiceArticle} from "../../models/invoice.model";


export const addProductToInvoice = createAction(
  '[Invoice Widget] Add product',
  props<InvoiceArticle>()
)

export const removeProductFromInvoice = createAction(
  '[Invoice Widget] Remove product',
  props<InvoiceArticle>()
)
