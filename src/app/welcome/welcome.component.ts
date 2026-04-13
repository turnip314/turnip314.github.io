import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core'
import { LoadingComponent } from '../shared/loading/loading.component';
import { ImageService } from '../shared/services/image.service';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { last } from 'rxjs';



@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    animations: [
        trigger('hoverExpand', [
            state('normal', style({ transform: 'scale(1)' })),
            state('hovered', style({ transform: 'scale(1.1)' })),
            transition('normal => hovered', animate('200ms ease-in')),
            transition('hovered => normal', animate('200ms ease-out'))
        ])
    ],
    standalone: false
})
export class WelcomeComponent {
    imageObject: any;
    displayImages: any;
    infinite = true;
    isMobile = false;
    start_index = 0;

    hoverStates = {
        linkedin: "normal",
        github: "normal",
        facebook: "normal"
    }

    private readonly platformId = inject(PLATFORM_ID);
    constructor(private overlay: Overlay, private imageService: ImageService, private platform: Platform) { }

    ngOnInit() {
        this.showOverlay();
        this.imageObject = this.imageService.getWelcomeImages();
        this.displayImages = this.imageObject

        if (isPlatformBrowser(this.platformId)) {
            this.isMobile = this.platform.ANDROID || this.platform.IOS || window.innerWidth < 720;
        }
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

    openLink(url: string) {
        if (isPlatformBrowser(this.platformId)) {
            window.open(url, '_blank');
        }
    }

    panImage(left: boolean) {
        this.animateReorder(
            () => {
                if (left) {
                    this.start_index--;
                } else {
                    this.start_index++;
                }

                if (this.start_index < 0) {
                    this.start_index = this.imageObject.length - 1;
                } else if (this.start_index >= this.imageObject.length) {
                    this.start_index = 0;
                }
                this.displayImages = []
                for (let i = 0; i < this.imageObject.length; i++) {
                    this.displayImages.push(this.imageObject[(this.start_index + i) % (this.imageObject.length)]);
                }
            },
            left
        )

    }

    trackById(index: number, item: any) {
        return item.thumbImage;
    }

    @ViewChild('listContainer', { static: true })
    container!: ElementRef<HTMLElement>;

    items = [];

    animateReorder(updateFn: () => void, left: boolean) {
        const container = this.container.nativeElement;

        // 1. FIRST: record initial positions
        const firstRects = new Map<string, DOMRect>();
        container.querySelectorAll('.item').forEach((el: any) => {
            firstRects.set(el.dataset.id, el.getBoundingClientRect());
        });

        if (left) {
            updateFn();
            requestAnimationFrame(() => {
                // 3. LAST: record new positions
                const lastRects = new Map<string, DOMRect>();
                const elements = container.querySelectorAll('.item');

                elements.forEach((el: any) => {
                    lastRects.set(el.dataset.id, el.getBoundingClientRect());
                });

                // 4. INVERT + PLAY
                elements.forEach((el: any) => {
                    const id = el.dataset.id;
                    const first = firstRects.get(id);
                    const last = lastRects.get(id);

                    el.style.transition = 'none';
                    el.style.transform = 'translateX(-293px)';

                    // Play
                    requestAnimationFrame(() => {
                        el.style.transform = '';
                        el.style.transition = 'transform 300ms ease';
                    });

                    return;

                });
            });
        } else {
            // first, animate
            requestAnimationFrame(() => {
                const lastRects = new Map<string, DOMRect>();
                const elements = container.querySelectorAll('.item');

                elements.forEach((el: any) => {
                    lastRects.set(el.dataset.id, el.getBoundingClientRect());
                });

                elements.forEach((el: any) => {
                    const id = el.dataset.id;
                    const first = firstRects.get(id);
                    const last = lastRects.get(id);

                    el.style.transition = 'none';
                    el.style.transform = '';

                    // Play
                    requestAnimationFrame(() => {
                        el.style.transform = 'translateX(-295px)';
                        el.style.transition = 'transform 300ms ease';
                    });

                    return;

                });
            });
            // then, update list once all visible items are in the right location
            setTimeout(() => updateFn(), 300);
            setTimeout(() => {
            const elements = container.querySelectorAll('.item');

            elements.forEach((el: any) => {
                el.style.transform = '';
            });
        }, 300);
        }
    }
}

