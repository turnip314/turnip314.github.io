import { Injectable } from '@angular/core'

@Injectable()
export class ImageService {
    getWelcomeImages() {
        return [{
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
    }

    getGalleryImages() {
        var images = [
            {
                image: 'earth.png',  
                name: 'Earth', 
            },
            {
                image: 'lemon.png',  
                name: 'When life gives you lemons...', 
            },
            {
                image: 'northern-lights.png',  
                name: 'Northern Lights', 
            },
            {
                image: 'marble.png',  
                name: 'Marble', 
            },
            {
                image: 'mountains.png',  
                name: 'Mountains', 
            },
            {
                image: 'potato.png',  
                name: 'Am Potato', 
            },
            {
                image: 'cheese.png',  
                name: 'Feeling Cheesy', 
            },
            {
                image: 'nebula.png',  
                name: 'Universe\'s Lens', 
            },
        ];

        return images.map(x => {
            return {
                image: 'assets/images/gallery/' + x.image,
                thumbImage: 'assets/images/gallery/thumbnails/' + x.image,
                title: x.name,
                alt: x.name
            }
        });
    }
}