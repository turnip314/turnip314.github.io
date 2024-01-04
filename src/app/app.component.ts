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
    trigger('dropDown', [
      state('initial', style({
        transform: 'translate(0, -5px)',
      })),
      state('final', style({
        transform: 'translate(0, 65px)',
      })),
      transition('initial => final, final => initial', animate('300ms ease-in')),
    ]),
    trigger('pageDown', [
      state('initial', style({
        transform: 'translate(0, 0)',
      })),
      state('final', style({
        transform: 'translate(0, 70px)',
      })),
      transition('initial => final, final => initial', animate('300ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  title = 'Turnip\'s Home Page';
  sidenavOpen = false;
  dropDownState = "initial";
  dropDownImage = "./assets/images/down-arrow.png";

  constructor(private router: Router, private route: ActivatedRoute) { }

  onEmptyClick(e, drawer) {
    if (e.target.name != "turnip-button") { drawer.close(); this.sidenavOpen = false;}
  }

  showTopNav()
  {
    this.dropDownState = this.dropDownState == "initial" ? "final" : "initial";
    this.dropDownImage = this.dropDownState == "initial" ? "./assets/images/down-arrow.png" : "./assets/images/up-arrow.png";
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
