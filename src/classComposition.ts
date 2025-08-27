export class Car {
  private readonly engine: Engine = new Engine();

  turnOn(): void {
    this.engine.turnOn;
  }
  turnOff(): void {
    this.engine.turnOff;
  }
  speedUp(): void {
    this.engine.speedUp;
  }
  speedDown(): void {
    this.engine.speedDown;
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is on...');
  }
  turnOff(): void {
    console.log('Engine is off...');
  }
  speedUp(): void {
    console.log('Speed is increasing...');
  }
  speedDown(): void {
    console.log('Speed is decreasing...');
  }
}

const car = new Car();
