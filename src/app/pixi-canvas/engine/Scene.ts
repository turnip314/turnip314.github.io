import { Game } from "./Game";

export abstract class Scene {
  constructor(protected app: any, protected PIXI: any, protected game: Game) {}

  abstract update(delta: number): void;

  onGeneralClick(x: number, y: number) {}

  destroy() {}
}
