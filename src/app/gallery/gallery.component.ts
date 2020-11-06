import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'pm-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: any;

  constructor(private _imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this._imageService.getGalleryImages();
  }

}
