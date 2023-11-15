import {createReducer, on} from "@ngrx/store";
import {InvoiceState} from "../../models/invoice.model";
import {addProductToInvoice, removeProductFromInvoice} from "./invoice.action";
import {TaxEnum} from "../../models/tax.enum";
import {ProductModel} from "../../models/product.model";


export const initialState: InvoiceState = {
  products: []
}


export const invoiceReducer = createReducer(
  initialState,
  on(addProductToInvoice, (state, {product, amount}) => {
    // Calculate gross price


    // Check if there are exising products in the invoice if so add the amount to the existing product
    const existingProduct = state.products.find(p => p.product.id === product.id);


    if (existingProduct) {
      return ({products: state.products.map(p => p.product.id === product.id ? {
        product,
        amount: p.amount + 1,
          totalTax: calculateTotalTax(product, p.amount + 1),
      } : p)})
    } else {
      return ({products: [...state.products, {product, amount, totalTax: calculateTotalTax(product) }]})
    }
  }),

  on(removeProductFromInvoice, (state, {product}) => {
    // Check if there are exising products in the invoice if so reduce the amount of the existing product
    const existingProduct = state.products.find(p => p.product.id === product.id);
    if (existingProduct && existingProduct.amount > 1) {
      return ({products: state.products.map(p => p.product.id === product.id ? {
        product,
        amount: p.amount - 1
      } : p)})
    } else {
      return ({products: state.products.filter(p => p.product.id !== product.id)})
    }
  })
);


function calculateTotalTax(product: ProductModel, quantity = 1) {
  const price = product.price;
  const basicTax = product.category.tax;
  const importTax = product.imported ? TaxEnum.IMPORT : TaxEnum.NONE;
  let tax = 0;
  // Calculate the taxes
  tax = (basicTax + importTax) * price;

  // Round taxes to the nearest 0.05
  tax = Math.ceil(tax * 20) / 20;
  // Calculate tax for the quantity
  return tax * quantity;
}
