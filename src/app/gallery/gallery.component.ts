import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ImageOverlayComponent } from '../shared/image-overlay/image-overlay.component';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'pm-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: any;

  constructor(private overlay: Overlay, private _imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this._imageService.getGalleryImages();
  }

  showOverlay(img) {
    const overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true,
    });
    const overlay = overlayRef.attach(new ComponentPortal(ImageOverlayComponent));
    overlay.instance.src = img.compressImage;
    overlay.instance.title = img.title;
    overlayRef.backdropClick().subscribe(x => {
      overlayRef.detach();
    })
}

}
