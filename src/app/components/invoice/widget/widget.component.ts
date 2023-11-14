import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {AppState} from "../../../models/state.model";
import {getProductCount} from "../../../state/invoice/invoice.selector";

@Component({
  selector: 'app-invoice-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  readonly productCount = this.store.selectSignal(getProductCount)
  constructor(private store: Store<AppState>) {}
}
