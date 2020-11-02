import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { LoadingComponent } from './shared/loading.component';

@Component({
  selector: 'page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Turnip\'s Home Page';
  sidenavOpen = false;

  constructor() { }

  onEmptyClick(e, drawer) {
    if (e.target.name != "turnip-button") { drawer.close(); this.sidenavOpen = false;}
  }


}
