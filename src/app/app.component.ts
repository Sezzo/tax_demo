import {Component} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {WidgetComponent} from "./components/invoice/widget/widget.component";
import localeDe from '@angular/common/locales/de';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, WidgetComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'tax';

  constructor() {
    registerLocaleData(localeDe)
  }
}
