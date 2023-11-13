import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../../services/product.service";
import {loadProducts, loadProductsError} from "./product.action";
import {catchError, exhaustMap, map, of} from "rxjs";


@Injectable()
export class ProductEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
      ofType(loadProducts),
      exhaustMap(() => this.productService.getProducts()
        .pipe(
          map(products => ({type: '[Products] Products loaded success', products})),
          catchError(() => of(loadProductsError))
        )
      )
    )
  )

  constructor(private actions$: Actions, private productService: ProductService) {
  }

}
