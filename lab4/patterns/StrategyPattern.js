class Car {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  accelerate() {
    this.strategy.accelerate();
  }
}

class EcoMode {
  accelerate() {
    console.log("Accelerating in eco mode");
    // Code for eco-friendly acceleration
  }
}

class SportMode {
  accelerate() {
    console.log("Accelerating in sport mode");
    // Code for sporty acceleration
  }
}

// Usage
const car = new Car(new EcoMode());
car.accelerate(); // Output: Accelerating in eco mode

car.setStrategy(new SportMode());
car.accelerate(); // Output: Accelerating in sport mode
