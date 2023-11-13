import {ProductModel} from "./product.model";


export interface InvoiceModel {
  products: ProductModel[];
}

export interface InvoiceArticle {
  product: ProductModel;
  amount: number;
}
