import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ImageOverlayComponent } from '../shared/image-overlay/image-overlay.component';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'nicole3',
  templateUrl: './nicole3.component.html',
  styleUrls: ['./nicole3.component.css'],
})
export class Nicole3Component implements OnInit {

  images: any;

  constructor(private overlay: Overlay, private _imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this._imageService.getAnniversary3MonthImages();
  }


}
