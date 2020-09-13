import { Component } from '@angular/core';

@Component({
  selector: 'page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Turnip\'s Home Page';
  showSideNav: boolean = true;

  testClick() {
    console.log("clicked!");
  }
}
