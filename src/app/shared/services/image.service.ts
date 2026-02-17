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
            }, {
                image: 'assets/images/convocation-full.png', 
                thumbImage: 'assets/images/convocation.png', 
                title: 'Convocation', 
                alt: 'Convocation' 
            }, {
                image: 'assets/images/victoria-full.png', 
                thumbImage: 'assets/images/victoria.png', 
                title: 'Victoria', 
                alt: 'Victoria' 
            }, {
                image: 'assets/images/niagara-full.png', 
                thumbImage: 'assets/images/niagara.png', 
                title: 'Niagara Falls', 
                alt: 'Niagara Falls' 
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

    getScenicImages() {
        var images = [
            {
                image: '72qilou.JPEG',  
                name: '72 Miracles Tower',
                description: 'Zhangjiajie'
            },
            {
                image: 'bird-nest.JPEG',  
                name: 'Bird Nest (Olympic Stadium)',
                description: 'Host of the 2008 Beijing Summer Olympic Games and 2022 Winter Olympic Games'
            },
            {
                image: 'canyon-waterfall.JPEG',  
                name: 'Canyon Waterfall',
                description: 'At the base of the great canyon of Zhangjiajie'
            },
            {
                image: 'capilano-night.JPEG',  
                name: 'Canyon Lights',
                description: 'At the Capilano Suspension Bridge Park'
            },
            {
                image: 'cave-1.JPEG',  
                name: 'Yellow Dragon Cave',
                description: 'Deep in the mountains at Zhangjiajie'
            },
            {
                image: 'cave-2.JPEG',  
                name: 'Yellow Dragon Cave',
                description: 'Deep in the mountains at Zhangjiajie'
            },
            {
                image: 'chang-jiang.JPEG',  
                name: 'Yangtze River Bridge',
                description: 'Built over the Yangtze River (Chang Jiang) in Wuhan'
            },
            {
                image: 'cypress.JPEG',  
                name: 'Cypress Provincial Park',
                description: 'British Columbia'
            },
            {
                image: 'dayanta.JPEG',  
                name: 'Dayanta',
                description: 'Also known as the Giant Wild Goose Pagoda, Xi\'an'
            },
            {
                image: 'eiffel.JPEG',  
                name: 'Eiffel Tower',
                description: 'Paris'
            },
            {
                image: 'forbidden-city.JPEG',  
                name: 'Forbidden City',
                description: 'View from the hilltops in Beijing'
            },
            {
                image: 'frozen-tree.JPEG',  
                name: 'Frozen Tree',
                description: 'Cold winter in Waterloo'
            },
            {
                image: 'geese.JPEG',  
                name: 'Canada Geese',
                description: 'A cute geese couple wandering in Waterloo'
            },
            {
                image: 'goslings.JPEG',  
                name: 'Teenage Geese',
                description: 'Almost fully grown!'
            },
            {
                image: 'great-wall-1.JPEG',  
                name: 'Great Wall',
                description: 'Expanse of the Great Wall into the mountains, Beijing'
            },
            {
                image: 'great-wall-2.JPEG',  
                name: 'Great Wall',
                description: 'Beijing'
            },
            {
                image: 'huashan-1.JPEG',  
                name: 'Hua Mountain',
                description: 'View from Huashan Mountain, one of the four sacred mountains of China'
            },
            {
                image: 'huashan-2.JPEG',  
                name: 'Hua Mountain',
                description: 'View from Huashan Mountain, one of the four sacred mountains of China'
            },
            {
                image: 'huashan-3.JPEG',  
                name: 'Hua Mountain',
                description: 'View from Huashan Mountain, one of the four sacred mountains of China'
            },
            {
                image: 'huashan-4.JPEG',  
                name: 'Hua Mountain',
                description: 'View from Huashan Mountain, one of the four sacred mountains of China'
            },
            {
                image: 'la-seine.JPEG',  
                name: 'La Seine',
                description: 'Paris'
            },
            {
                image: 'monkey-1.JPEG',  
                name: 'Monkey',
                description: 'Monkeys at Zhangjiajie National Forest Park!'
            },
            {
                image: 'monkey-2.JPEG',  
                name: 'Monkeys',
                description: 'Monkeys at Zhangjiajie National Forest Park!'
            },
            {
                image: 'mountains.JPEG',  
                name: 'Mountains',
                description: 'View of mountains in Vancouver from flight window'
            },
            {
                image: 'niagara-butterfly.JPEG',  
                name: 'Butterfly Conservatory',
                description: 'Niagara Falls Region'
            },
            {
                image: 'niagara-close.JPEG',  
                name: 'Niagara Falls',
                description: 'Close-up view!'
            },
            {
                image: 'niagara-night.JPEG',  
                name: 'Niagara Falls - Nighttime',
                description: 'Night view of the falls'
            },
            {
                image: 'niagara-skylon-can.JPEG',  
                name: 'Niagara Falls - Sky View',
                description: 'View of the falls from the Skylon Tower'
            },
            {
                image: 'niagara-skylon-us.JPEG',  
                name: 'Niagara Falls - Sky View',
                description: 'View of the falls (US side) from the Skylon Tower'
            },
            {
                image: 'notre-dame.JPEG',  
                name: 'Notre Dame Cathedral',
                description: 'Paris'
            },
            {
                image: 'pacific.JPEG',  
                name: 'Shoreline',
                description: 'View of the Pacific Ocean from Yantai'
            },
            {
                image: 'parliament.JPEG',  
                name: 'Parliament',
                description: 'Parliament building in Ottawa'
            },
            {
                image: 'red-sun.JPEG',  
                name: 'Red Sun',
                description: 'Hazy day in Vancouver'
            },
            {
                image: 'round-trees.JPEG',  
                name: 'Round Trees',
                description: 'Found in a park in Beijing'
            },
            {
                image: 'seawall.JPEG',  
                name: 'Stanley Park Seawall',
                description: 'Vancouver'
            },
            {
                image: 'temple-of-heaven.JPEG',  
                name: 'Temple of Heaven',
                description: 'Beijing'
            },
            {
                image: 'terracotta-warriors.JPEG',  
                name: 'Terracotta Warriors',
                description: 'Xi\'an'
            },
            {
                image: 'tianmenshan.JPEG',  
                name: 'Tianmen Mountain',
                description: 'Zhangjiajie'
            },
            {
                image: 'toronto-day.JPEG',  
                name: 'City View',
                description: 'Toronto'
            },
            {
                image: 'toronto-night.JPEG',  
                name: 'Night View',
                description: 'Toronto'
            },
            {
                image: 'vancouver.JPEG',  
                name: 'City View',
                description: 'Vancouver'
            },
            {
                image: 'zhangjiajie-1.JPEG',  
                name: 'Zhangjiajie National Forest Park',
                description: 'Also known as the "Avatar Mountains"'
            },
            {
                image: 'zhangjiajie-2.JPEG',  
                name: 'Zhangjiajie National Forest Park',
                description: 'Also known as the "Avatar Mountains"'
            },
            {
                image: 'solar-eclipse.JPEG',  
                name: 'Total Solar Eclipse',
                description: 'Barely visible under the clouds!'
            },
            {
                image: 'butchart-1.JPEG',  
                name: 'Butchart Gardens',
                description: 'Victoria'
            },
            {
                image: 'butchart-2.JPEG',  
                name: 'Butchart Gardens',
                description: 'Victoria'
            },
            {
                image: 'central-park.JPEG',  
                name: 'Central Park',
                description: 'NYC'
            },
            {
                image: 'downtown-boston.JPEG',  
                name: 'Downtown Boston',
                description: 'Boston'
            },
            {
                image: 'expo.JPEG',  
                name: 'Xi\'an Expo Park',
                description: 'Xi\'an'
            },
            {
                image: 'furong.JPEG',  
                name: 'Tang\'s Paradise',
                description: 'Xi\'an'
            },
            {
                image: 'glow-snow.JPEG',  
                name: 'Light in the Snow',
                description: 'Looks mysterious...'
            },
            {
                image: 'cabo.JPEG',  
                name: 'Cabo San Lucas',
                description: 'Mexico'
            },
            {
                image: 'sunset.JPEG',  
                name: 'Sunset on the Sea',
                description: 'Cruise ship'
            },
            {
                image: 'shore-mexico.JPEG',  
                name: 'Shoreline',
                description: 'Mazatlan, Mexico'
            },
            {
                image: 'puerto-vallarta.JPEG',  
                name: 'Puerto Vallarta',
                description: 'Puerto Vallarta, Mexico'
            },
        ];

        return images.map(x => {
            return {
                image: 'assets/images/scenic/' + x.image,
                title: x.name,
                description: x.description,
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

    getAnniversary3MonthImages() {
        var images = [
            {
                image: 'nicole3.jpg',
                name: 'Valentine\'s Day'
            },
        ];

        return images.map(x => {
            return {
                image: 'assets/images/anniversary3month/' + x.image,
                title: x.name,
                alt: x.name
            }
        });
    }
}