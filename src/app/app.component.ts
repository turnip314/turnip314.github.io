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
  showSideNav: boolean = true;

  constructor(private overlay: Overlay) { }

  ngOnInit() {
    this.showOverlay();
  }

  showOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    overlayRef.attach(new ComponentPortal(LoadingComponent));

    setTimeout(() => {
      overlayRef.detach();
    }, 500);
  }
}
