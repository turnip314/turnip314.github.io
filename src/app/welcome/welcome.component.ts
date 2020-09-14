import { Component } from '@angular/core'

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

}

