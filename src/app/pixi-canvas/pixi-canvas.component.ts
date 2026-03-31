import {
    AfterViewInit,
    Component,
    ElementRef,
    ViewChild,
    PLATFORM_ID,
    NgZone,
    inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Game } from './engine/Game';
import { GameService } from './engine/services/game.service';
import { Application } from 'pixi.js';

@Component({
    selector: 'app-pixi-canvas',
    templateUrl: 'pixi-canvas.component.html',
    styleUrls: ['pixi-canvas.component.css'],
    standalone: false
})
export class PixiCanvasComponent implements AfterViewInit {

    @ViewChild('container', { static: true })
    container!: ElementRef<HTMLDivElement>;

    private app: Application | undefined;
    private game: Game | undefined;
    private tickerFn: any;
    private readonly platformId = inject(PLATFORM_ID);

    constructor(private ngZone: NgZone, private gameService: GameService) { }

    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        // Run Pixi outside Angular change detection (important for performance)
        this.ngZone.runOutsideAngular(async () => {

            const PIXI = await import('pixi.js');

            this.app = new PIXI.Application();

            await this.app.init({
                resizeTo: this.container.nativeElement,
                background: '#000000',
                antialias: true,
            });
            this.container.nativeElement.appendChild(this.app.canvas);

            let testblock = new PIXI.Graphics();
            testblock.beginFill('#ffffff04');
            testblock.rect(
                0, 0, 1280, 720
            ).fill('#ffffff04');
            testblock.endFill()
            this.app.stage.addChild(testblock)

            this.game = new Game(this.app, PIXI, this.gameService);
            this.game.start("hues");

            //this.app.renderer.resize(200, 200);
            const scaling = (window.innerWidth / 1280 < window.innerHeight / 720) ? window.innerWidth / 1280 : window.innerHeight / 720;
            this.app.stage.scale.x = scaling;
            this.app.stage.scale.y = scaling;
        });
    }

    ngOnDestroy() {
        if (this.app) {
            this.app.ticker.remove(this.tickerFn);
            this.app.destroy(true);
        }
    }
}