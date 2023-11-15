import {initialState, invoiceReducer} from "./invoice.reducer";
import {addProductToInvoice} from "./invoice.action";
import {InvoiceState} from "../../models/invoice.model";


describe('Invoice Reducer', () => {

  it('should add a product to invoice', () => {
    const initial = initialState;
    console.log(initial);

    const state = invoiceReducer(initialState, addProductToInvoice({
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
      }));

    const newState: InvoiceState = {
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

    expect(state).toEqual(newState)

  });

});
