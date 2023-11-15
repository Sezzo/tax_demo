import {AppState} from "../../models/state.model";
import {getInvoiceProducts} from "./invoice.selector";
import {InvoiceState} from "../../models/invoice.model";

describe('Invoice Selectors', () => {
  const initialState: InvoiceState = {

      products: [{
        product: {
          id: 1,
          name: 'test',
          price: 10,
          category: {
            name: 'test',
            tax: 0
          },
          imported: false
        },
        amount: 1,
        totalTax: 0
      }]

  }

  it('should select invoice products', () => {
    const result = getInvoiceProducts.projector(initialState.products);
    expect(result).toEqual([{
      product: {
        id: 1,
        name: 'test',
        price: 10,
        category: {
          name: 'test',
          tax: 0
        },
        imported: false
      },
      amount: 1,
      totalTax: 0
    }]);
  });

  it('should select invoice product count', () => {
    const result = getInvoiceProducts.projector(initialState.products).length;
    expect(result).toEqual(1);
  })
});
