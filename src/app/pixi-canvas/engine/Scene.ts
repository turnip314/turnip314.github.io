import { GameService } from "../../shared/services/game.service";
import { Game } from "./Game";

export abstract class Scene {
  constructor(protected app: any, protected PIXI: any, protected game: Game, protected gameService: GameService) {}

  abstract update(delta: number): void;

  onGeneralClick(x: number, y: number) {}

  destroy() {}
}
