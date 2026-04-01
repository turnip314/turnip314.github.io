export abstract class Entity {
  constructor(protected world: any, protected PIXI: any) {}

  abstract update(delta: number): void;

  destroy() {}
}
