import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {Store} from "@ngrx/store";
import {getInvoiceProducts} from "../../state/invoice/invoice.selector";
import {AppState} from "../../models/state.model";
import {InvoiceArticle} from "../../models/invoice.model";
import {addProductToInvoice, removeProductFromInvoice} from "../../state/invoice/invoice.action";
import {tap} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  products$ = this.store.select(getInvoiceProducts).pipe(tap(console.log));
  protected formGroup: FormGroup;


  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      company: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  // Define table headers
  tableHeaders = [
    'name',
    'amount',
    'price',
    'basicTax',
    'importTax',
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
