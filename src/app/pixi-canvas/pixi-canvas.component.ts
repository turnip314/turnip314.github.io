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

@Component({
  selector: 'app-pixi-canvas',
  templateUrl: 'pixi-canvas.component.html',
  styleUrls: ['pixi-canvas.component.css'],
  standalone: false
})
export class PixiCanvasComponent implements AfterViewInit {

  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;

  private app: any;
  private game: Game;
  private tickerFn: any;
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private ngZone: NgZone) { }

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Run Pixi outside Angular change detection (important for performance)
    this.ngZone.runOutsideAngular(async () => {

      const PIXI = await import('pixi.js');

      this.app = new PIXI.Application();
      

      await this.app.init({
        resizeTo: this.container.nativeElement,
        background: '#1099bb',
        antialias: true,
        resolution: window.devicePixelRatio,
      });
      this.container.nativeElement.appendChild(this.app.canvas);

      this.game = new Game(this.app, PIXI);
      this.game.start();

      //this.app.renderer.resize(200, 200);
      const scaling = (window.innerWidth/1280 < window.innerHeight/720)? window.innerWidth/1280 : window.innerHeight/720;
      this.app.stage.scale.x=scaling;
      this.app.stage.scale.y=scaling;
    });
  }

  ngOnDestroy() {
    if (this.app) {
      this.app.ticker.remove(this.tickerFn);
      this.app.destroy(true);
    }
  }
}