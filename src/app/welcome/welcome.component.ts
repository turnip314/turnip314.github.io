import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, HostListener } from '@angular/core'
import { LoadingComponent } from '../shared/loading/loading.component';
import { ImageService } from '../shared/services/image.service';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    imgSrc = "./assets/images/me-and-vincent.jpg";

    imageObject: any;

    infinite = true;

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

    constructor(private overlay: Overlay, private imageService: ImageService){
        
    }

    ngOnInit() {
        this.showOverlay();
        this.imageObject = this.imageService.getWelcomeImages();
        const element = document.getElementById('start');
        element.scrollIntoView();
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

    ngAfterViewInit() {
        var startEl = document.getElementById("start");
        startEl.scrollIntoView();
    }

    getOpacityByRelativeWindowLocation(pageHeight, elementTop, elementBottom) {
        pageHeight -= 70;
        elementTop -= 70;
        elementBottom -= 70;
        // Element smaller than page
        // Return what percentage of div is on screen
        let elementMiddle = (elementBottom + elementTop)/2;
        if (elementBottom - elementTop > pageHeight) {
            if (elementTop <= 0 && elementBottom >= pageHeight) {
                return "100%";
            }
            else if (elementTop > 0) {
                return (100*Math.max(1-elementTop/pageHeight, 0)).toString() + "%";
            }
            else {
                return (100*Math.max(elementBottom/pageHeight, 0)).toString() + "%";
            }
        } else {
            if (pageHeight/4 <= elementMiddle && elementMiddle <= 3 * pageHeight / 4) {
                return "100%"
            }
            else if (elementMiddle < pageHeight/4){
                return (100*Math.max(1-2*(pageHeight/4-elementMiddle)/pageHeight, 0)).toString() + "%";
            }
            else {
                return (100*Math.max(1-2*(elementMiddle-3*pageHeight/4)/pageHeight, 0)).toString() + "%";
            }
        }
    }

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        var darkElements = document.getElementsByClassName('fade-in');
        for (var i = 0; i < darkElements.length; ++i) {
            var el = <HTMLElement> darkElements[i];
            el.style.opacity = this.getOpacityByRelativeWindowLocation(
                window.innerHeight,
                el.getBoundingClientRect().top,
                el.getBoundingClientRect().bottom
            );
        }
    }
}

