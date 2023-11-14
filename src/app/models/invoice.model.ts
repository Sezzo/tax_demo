import {ProductModel} from "./product.model";


export interface InvoiceModel {
  products: InvoiceArticle[];
}

export interface InvoiceArticle {
  product: ProductModel;
  amount: number;
  grossPrice?: number;
}

export interface InvoiceState {
  products: InvoiceArticle[];
}
