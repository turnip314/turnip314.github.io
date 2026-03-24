export class Input {
  keys: Record<string, boolean> = {};
  listeners: any[] = [];

  constructor() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key] = true;
      this.listeners.forEach((l) => l.notify(e.key));
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key] = false;
    });
  }

  addListener(listener: any) {
    this.listeners.push(listener);
  }

  isDown(key: string) {
    return !!this.keys[key];
  }
}
