import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './error/page-under-construction/page-under-construction.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { RouterModule } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    NgbModule,
    NgImageSliderModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
