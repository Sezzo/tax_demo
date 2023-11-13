import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {ProductModel, ProductState} from "../../models/product.model";
import {loadProducts} from "../../state/product/product.action";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]> = this.store.select(state => state.products);

  constructor(private store: Store<ProductState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
