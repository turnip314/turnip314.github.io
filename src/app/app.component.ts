import { Component } from '@angular/core';

@Component({
    selector: 'page-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    title = 'Turnip\'s Home Page';
    sidenavOpen = false;
    mediaState = "initial";

    onEmptyClick(e, drawer) {
        if (e.target.name != "turnip-button") { drawer.close(); this.sidenavOpen = false; }
        this.mediaState = "initial";
    }
}
