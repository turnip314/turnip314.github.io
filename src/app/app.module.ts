import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'

import { LoadingComponent } from './shared/loading/loading.component';
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
import { ContactService } from './contact.service';

import { OverlayModule } from '@angular/cdk/overlay';
import { AcademicsComponent } from './academics/academics.component';

import { TwentyFourComponent } from './twentyfour/twentyfour.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { Nicole1Component } from './nicole-anniversary-1/nicole1.component'
import { Nicole2Component } from './nicole-anniversary-2/nicole2.component'
import { Nicole3Component } from './nicole-anniversary-3/nicole3.component'

import { ImageService } from './shared/services/image.service';
import { ImageOverlayComponent } from './shared/image-overlay/image-overlay.component'



@NgModule({
  providers: [
    ContactService,
    ImageService
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    ContactComponent,
    LoadingComponent,
    AcademicsComponent,
    GalleryComponent,
    ImageOverlayComponent,
    TwentyFourComponent,
    Nicole1Component,
    Nicole2Component,
    Nicole3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    NgbModule,
    NgImageSliderModule,
    OverlayModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'academics', component: AcademicsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'nicole', component: Nicole3Component },
      { path: '24', component : TwentyFourComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
