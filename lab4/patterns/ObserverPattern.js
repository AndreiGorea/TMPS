class Car {
  constructor() {
    this.observers = [];
    this.speed = 0;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  setSpeed(speed) {
    this.speed = speed;
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.speed));
  }
}

class Speedometer {
  update(speed) {
    console.log(`Current speed: ${speed} km/h`);
  }
}

// Usage
const car = new Car();
const speedometer = new Speedometer();

car.addObserver(speedometer);
car.setSpeed(80);
