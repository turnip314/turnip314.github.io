import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, HostListener } from '@angular/core'
import { LoadingComponent } from '../shared/loading/loading.component';
import { ImageService } from '../shared/services/image.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    animations: [
        trigger('fadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter, :leave', [
              animate(1000)
            ]),
        ]),
      ],
})
export class WelcomeComponent {
    private touchStartY = 0;
    private touchEndY = 0;
    private moved = false;
    @HostListener('wheel', ['$event'])
    onMouseWheel(event: WheelEvent) {
        if (event.deltaY > 30) 1;
        else if (event.deltaY < -30) 1;
    }
    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
        this.touchStartY = event.touches[0].clientY;
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: TouchEvent) {
        this.touchEndY = event.touches[0].clientY;
        this.moved = true;
        
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd() {
        if (this.moved) this.detectSwipeDirection();
    }

    private detectSwipeDirection() {
        const deltaY = this.touchEndY - this.touchStartY;
        if (deltaY > 50) {

        } else if (deltaY < -50) {

        }
        this.moved = false
    }


    imageObject: any;
    displayImages: any;
    infinite = true;
    isMobile = false;
    start_index = 0;


    constructor(private overlay: Overlay, private imageService: ImageService, private platform: Platform){}

    ngOnInit() {
        this.showOverlay();
        this.imageObject = this.imageService.getWelcomeImages();
        this.displayImages = this.imageObject
        this.isMobile = this.platform.ANDROID || this.platform.IOS || window.innerWidth < 720;
    }
    
    showOverlay() {
        const overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        overlayRef.attach(new ComponentPortal(LoadingComponent));

        setTimeout(() => {
            overlayRef.detach();
        }, 0);
    }

    onScroll() {
            
    }

    panImage(left: boolean) {
        if (left) {
            this.start_index--;
        } else {
            this.start_index++;
        }
        
        if (this.start_index < 0) {
            this.start_index = this.imageObject.length-1;
        } else if (this.start_index >= this.imageObject.length) {
            this.start_index = 0;
        }
        this.displayImages = []
        for (let i = 0; i < this.imageObject.length; i++) {
            this.displayImages.push(this.imageObject[(this.start_index+i)%(this.imageObject.length)]);
        }
    }
}

