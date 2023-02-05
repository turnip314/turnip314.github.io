import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ImageOverlayComponent } from '../shared/image-overlay/image-overlay.component';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'nicole2',
  templateUrl: './nicole2.component.html',
  styleUrls: ['./nicole2.component.css'],
})
export class Nicole2Component implements OnInit {

  images: any;
  love: any;

  constructor(private overlay: Overlay, private _imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this._imageService.getAnniversary2MonthImages();
    this.love = this._imageService.getLoveImage();
  }


}
