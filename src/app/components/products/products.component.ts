import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {ProductModel, ProductState} from "../../models/product.model";
import {loadProducts} from "../../state/product/product.action";
import {distinctUntilChanged, filter, firstValueFrom, lastValueFrom, Observable, switchMap, tap} from "rxjs";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  products$: Observable<ProductModel[]> = this.store.select(state => state.products).pipe(tap(a => console.log(a), ));
  dataSource!: MatTableDataSource<ProductModel>

  // Define table headers
  tableHeaders = [
    'name',
    'price',
    'category',
    'imported',
    'tax',
    'action'
  ]

  constructor(private store: Store<ProductState>, private changeDetectionRef: ChangeDetectorRef) {
  }

  async ngOnInit(): Promise<void> {
    this.store.dispatch(loadProducts());

    const products = await lastValueFrom(this.products$)
    console.log("p",products)
    this.dataSource = new MatTableDataSource<ProductModel[]>(products.products);

    this.changeDetectionRef.detectChanges();
  }

  ngAfterViewInit(): void {
    this.changeDetectionRef.detectChanges();
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
}
