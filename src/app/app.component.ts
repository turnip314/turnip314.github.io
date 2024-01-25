import { trigger, state, style, transition, animate } from '@angular/animations';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('mediaUp', [
      state('initial', style({
        transform: 'translateY(-90px)',
      })),
      state('final', style({
        transform: 'translateY(-173px)',
      })),
      transition('initial => final, final => initial', animate('300ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  title = 'Turnip\'s Home Page';
  sidenavOpen = false;
  mediaState = "initial";
  dropDownImage = "./assets/images/down-arrow.png";

  constructor(private router: Router, private route: ActivatedRoute) { }

  onEmptyClick(e, drawer) {
    if (e.target.name != "turnip-button") { drawer.close(); this.sidenavOpen = false;}
  }


  ngOnInit() {
    // Subscribe to router events to detect navigation changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check the current router URL or any specific route condition
    });
  }


}
