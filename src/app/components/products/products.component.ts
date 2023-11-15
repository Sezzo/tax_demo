import {Component} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {Store} from "@ngrx/store";
import {ProductModel} from "../../models/product.model";
import {loadProducts} from "../../state/product/product.action";
import {Observable} from "rxjs";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {AppState} from "../../models/state.model";
import {MatButtonModule} from "@angular/material/button";
import {addProductToInvoice} from "../../state/invoice/invoice.action";
import { NoopAnimationsModule} from "@angular/platform-browser/animations";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NoopAnimationsModule, MatTableModule, MatIconModule, MatButtonModule ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<ProductModel[]> = this.store.select(state => state.productState.products);

  // Define table headers
  tableHeaders = [
    'name',
    'price',
    'category',
    'imported',
    'tax',
    'action'
  ]

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadProducts());
  }

  addToInvoice(product: ProductModel) {
    console.log("add", product)
    this.store.dispatch(addProductToInvoice({product, amount: 1}));
  }
}
