import {TaxEnum} from "./tax.enum";


export interface ProductModel {
  name: string;
  price: number;
  category: ProductCategoryModel;
  imported: boolean;
}


export interface ProductCategoryModel {
  name: string;
  tax: TaxEnum;
}
