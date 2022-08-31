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
                image: 'warden.png',  
                name: 'Minecraft Warden', 
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
                image: 'pikachu.png',  
                name: 'Surprised Pikachu', 
            },
            {
                image: 'lightbulb.png',  
                name: 'Lightbulb', 
            },
            {
                image: 'sunset.png',  
                name: 'Sunset', 
            },
            {
                image: 'night-scene.png',  
                name: 'Bleeding Night', 
            },
            {
                image: 'bubbles.png',  
                name: 'Bubbles', 
            },
            {
                image: 'nebula.png',  
                name: 'Universe\'s Lens', 
            },
        ];

        return images.map(x => {
            return {
                image: 'assets/images/gallery/' + x.image,
                compressImage: 'assets/images/gallery/compress/' + x.image.slice(0, -4) + "-min" + ".png",
                thumbImage: 'assets/images/gallery/thumbnails/' + x.image,
                title: x.name,
                alt: x.name
            }
        });
    }

    getAnniversary1MonthImages() {
        var images = [
            {
                image: 'you.png',
                name: 'You'
            },
            {
                image: 'me.png',
                name: 'Me'
            },
            
        ];

        return images.map(x => {
            return {
                image: 'assets/images/anniversary1month/' + x.image,
                title: x.name,
                alt: x.name
            }
        });
    }

    getAnniversary2MonthImages() {
        var images = [
            {
                image: 'us.jpg',
                name: 'Us'
            },
        ];

        return images.map(x => {
            return {
                image: 'assets/images/anniversary2month/' + x.image,
                title: x.name,
                alt: x.name
            }
        });
    }

    getLoveImage() {
        return {
            image: 'assets/images/anniversary1month/love.png',  
            name: 'Love', 
        }
    }
}