import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  NgZone
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
  private tickerFn: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) { }

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
        resolution: window.devicePixelRatio
      });

      this.container.nativeElement.appendChild(this.app.canvas);

      this.setupScene(PIXI);
      this.startGameLoop();
    });

  }

  setupScene(PIXI: any) {
    const box = new PIXI.Graphics();
    box.beginFill(0xff0000);
    box.drawRect(0, 0, 100, 100);
    box.endFill();

    box.x = 500;
    box.y = 500;

    this.app.stage.addChild(box);

    // store for updates
    this.box = box;
  }

  private box: any;

  startGameLoop() {
    this.tickerFn = (ticker: any) => {
      const delta = ticker.deltaTime;

      this.update(delta);
      this.render();
    };

    this.app.ticker.add(this.tickerFn);
  }

  update(delta: number) {
    if (this.box) {
      this.box.rotation += 0.01 * delta;
    }
  }

  render() {
  }

  ngOnDestroy() {
    if (this.app) {
      this.app.ticker.remove(this.tickerFn);
      this.app.destroy(true);
    }
  }
}