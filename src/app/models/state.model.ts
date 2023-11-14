import {ProductState} from "./product.model";
import {InvoiceState} from "./invoice.model";

export interface AppState {
  productState: ProductState;
  invoiceState: InvoiceState;
}
