export abstract class Entity {
  constructor(protected app: any, protected PIXI: any) {}

  abstract update(delta: number): void;

  destroy() {}
}
