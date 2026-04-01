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
import { Application, Container } from 'pixi.js';
import { ActivatedRoute } from '@angular/router';

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
    private world: Container | undefined;
    private tickerFn: any;
    private readonly platformId = inject(PLATFORM_ID);

    constructor(private ngZone: NgZone, private route: ActivatedRoute, private gameService: GameService) { }

    async ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        // Run Pixi outside Angular change detection (important for performance)
        this.ngZone.runOutsideAngular(async () => {

            const PIXI = await import('pixi.js');

            this.app = new PIXI.Application();

            const container = this.container.nativeElement;
            await this.app.init({
                width: container.clientWidth,
                height: container.clientHeight,
                background: '#000000',
                antialias: true,
            });
            this.container.nativeElement.appendChild(this.app.canvas);

            this.world = new PIXI.Container();
            this.app.stage.addChild(this.world);

            let testblock = new PIXI.Graphics();
            testblock.beginFill('#ffffff04');
            testblock.rect(
                0, 0, 1280, 720
            ).fill('#ffffff04');
            testblock.endFill()
            this.world.addChild(testblock)

            const app = this.route.snapshot.data.app;
            console.log(app);
            this.game = new Game(this.app, this.world, PIXI, this.gameService);
            this.game.start(app);

            const scale = Math.min(
                container.clientWidth / 1280,
                container.clientHeight / 720
            );

            this.app.stage.scale.set(scale);
        });
    }

    ngOnDestroy() {
        if (this.app) {
            this.app.ticker.remove(this.tickerFn);
            this.app.destroy(true);
        }
    }
}