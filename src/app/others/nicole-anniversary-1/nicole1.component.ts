import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ImageOverlayComponent } from '../../shared/image-overlay/image-overlay.component';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'nicole1',
  templateUrl: './nicole1.component.html',
  styleUrls: ['./nicole1.component.css']
})
export class Nicole1Component implements OnInit {

  images: any;
  love: any;

  constructor(private overlay: Overlay, private _imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this._imageService.getAnniversary1MonthImages();
    this.love = this._imageService.getLoveImage();
  }


}
