import {Component, computed, signal, Signal} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {Store} from "@ngrx/store";
import {getInvoiceProducts} from "../../state/invoice/invoice.selector";
import {AppState} from "../../models/state.model";
import {InvoiceArticle} from "../../models/invoice.model";
import {addProductToInvoice, removeProductFromInvoice} from "../../state/invoice/invoice.action";
import {map, Observable, tap} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTableModule, MatInputModule, ReactiveFormsModule, BrowserAnimationsModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  products$: Observable<InvoiceArticle[]> = this.store.select<InvoiceArticle[]>(getInvoiceProducts).pipe(tap(console.log));
  protected formGroup: FormGroup;
  totalTax = signal(0);
  totalPrice = signal(0);
  //totalPrice: Signal<number>

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      company: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
    });

    this.products$.subscribe(products => {
      let tax = 0;
      let price = 0;
      products.forEach(p => {
        tax += p.totalTax? p.totalTax : 0;
        price += p.product.price * p.amount;
      })
      this.totalTax.set(tax);
      this.totalPrice.set(price + this.totalTax());
    })
  }

  // Define table headers
  tableHeaders = [
    'name',
    'amount',
    'price',
    'basicTax',
    'importTax',
    'tax',
    'grossPrice',
    'action'
  ]


  removeFromInvoice(product: InvoiceArticle) {
    this.store.dispatch(removeProductFromInvoice(product));
  }

  addToInvoice(product: InvoiceArticle) {
    console.log("add", product)
    this.store.dispatch(addProductToInvoice(product));
  }

  generatePdf() {
    window.print();
  }
}
