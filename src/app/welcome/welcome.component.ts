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
              animate(1000) // Adjust the duration as needed
            ]),
        ]),
        trigger('hoverExpand', [
            state('normal', style({ transform: 'scale(1)' })),
            state('hovered', style({ transform: 'scale(1.1)' })),
            transition('normal => hovered', animate('200ms ease-in')),
            transition('hovered => normal', animate('200ms ease-out'))
          ]),
      ],
})
export class WelcomeComponent {
    imgSrc = "./assets/images/me-and-vincent.jpg";

    imageObject: any;

    infinite = true;
    expandedState="initial";
    imageHoverState="normal";

    isMobile = false;

    imageSize = {
        width:'250px',
        height:'325px'
    };

    autoSlide = {
        interval: 4,
        stopOnHover: true
    };

    languages = [{
            src: './assets/images/python.png',
            name: 'Python',
            status: 'Advanced'
        }, {
            src: './assets/images/cpp.png',
            name: 'C++',
            status: 'Advanced'
        }, {
            src: './assets/images/csharp.png',
            name: 'C#',
            status: 'Advanced'
        }, {
            src: './assets/images/sql.png',
            name: 'SQL',
            status: 'Advanced'
        }, {
            src: './assets/images/java.png',
            name: 'Java',
            status: 'Intermediate'
        }, {
            src: './assets/images/js.png',
            name: 'JavaScript',
            status: 'Intermediate'
        }, {
            src: './assets/images/php.png',
            name: 'PHP',
            status: 'Intermediate'
        }, {
            src: './assets/images/html.png',
            name: 'HTML',
            status: 'Intermediate'
        }, {
            src: './assets/images/css.png',
            name: 'CSS',
            status: 'Intermediate'
        }, {
            src: './assets/images/racket.png',
            name: 'Racket',
            status: 'Intermediate'
        }, {
            src: './assets/images/C.png',
            name: 'C',
            status: 'Beginner'
        }, {
            src: './assets/images/scala.png',
            name: 'Scala',
            status: 'Beginner'
        },
    ];

    constructor(private overlay: Overlay, private imageService: ImageService, private platform: Platform){
        
    }

    ngOnInit() {
        this.showOverlay();
        this.imageObject = this.imageService.getWelcomeImages();
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

    expand()
    {
        this.expandedState = "final";
    }

    onHover()
    {
        if (this.expandedState == "initial")
        {
            this.imageHoverState = "hovered";
        }
        
    }

    onUnhover()
    {
        if (this.expandedState == "initial")
        {
            this.imageHoverState = "normal";
        }
    }
}

