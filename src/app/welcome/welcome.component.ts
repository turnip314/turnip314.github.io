import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, HostListener } from '@angular/core'
import { LoadingComponent } from '../shared/loading.component';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    imgSrc = "./assets/images/me-and-vincent.jpg";

    imageObject: Array<object> = [{
            image: 'assets/images/me-and-vincent.jpg',
            thumbImage: 'assets/images/me-and-vincent.jpg',
            alt: 'Card Tower',
            title: 'Tower of Cards'
        }, {
            image: 'assets/images/twin-peaks.jpg', 
            thumbImage: 'assets/images/twin-peaks.jpg',
            title: 'Twin Peaks San Francisco',
            alt: 'Twin Peaks San Francisco'
        }, {
            image: 'assets/images/golden-gate-gang-full.jpg',
            thumbImage: 'assets/images/golden-gate-gang.jpg',
            title: 'Right Hand Rule',
            alt: 'Physics Gang' 
        }, {
            image: 'assets/images/golden-gate-squat-full.jpg', 
            thumbImage: 'assets/images/golden-gate-squat.jpg', 
            title: 'Golden Gate Gang', 
            alt: 'Golden Gate Gang' 
        }, {
            image: 'assets/images/mathcamp-canada-day-full.jpg', 
            thumbImage: 'assets/images/mathcamp-canada-day.jpg', 
            title: 'Canada Day at Mathcamp', 
            alt: 'Canada Day at Mathcamp' 
        }, {
            image: 'assets/images/mexico-full.jpg', 
            thumbImage: 'assets/images/mexico.jpg', 
            title: 'Family Trip to Mexico', 
            alt: 'Family Trip to Mexico' 
        }
    ];

    infinite = true;

    imageSize = {
        width:'250px',
        height:'325px'
    };

    autoSlide = {
        interval: 4,
        stopOnHover: true
    }

    constructor(private overlay: Overlay){
        
    }

    ngOnInit() {
        this.showOverlay();
      }
    
      showOverlay() {
        const overlayRef = this.overlay.create({
          positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
          hasBackdrop: true
        });
        overlayRef.attach(new ComponentPortal(LoadingComponent));
    
        setTimeout(() => {
          overlayRef.detach();
        }, 500);
      }

    ngAfterViewInit() {
        var startEl = document.getElementById("start");
        startEl.scrollIntoView();
        console.log("here");
    }

    getOpacityByRelativeWindowLocation(pageHeight, elementTop, elementBottom) {
        // Element smaller than page
        // Return what percentage of div is on screen
        let elementMiddle = (elementBottom + elementTop)/2;
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

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        console.log("---");
        // console.log(window.pageYOffset);
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

