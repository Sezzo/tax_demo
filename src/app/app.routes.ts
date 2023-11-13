import { Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";

export const routes: Routes = [
  {component: ProductsComponent, path: 'products' },
  {component: InvoiceComponent, path: 'invoice' },
  {path: '**', redirectTo: '/products', pathMatch:'full'}
];
