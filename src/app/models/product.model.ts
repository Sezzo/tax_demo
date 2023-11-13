import {TaxEnum} from "./tax.enum";


export interface ProductModel {
  id: number;
  name: string;
  price: number;
  category: ProductCategoryModel;
  imported: boolean;
}


export interface ProductCategoryModel {
  name: string;
  tax: TaxEnum;
}

export interface ProductState {
  products: ProductModel[]
}
