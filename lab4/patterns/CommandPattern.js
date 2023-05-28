class Car {
  constructor() {
    this.commands = [];
  }

  executeCommand(command) {
    this.commands.push(command);
    command.execute();
  }
}

class AccelerateCommand {
  constructor(speed) {
    this.speed = speed;
  }

  execute() {
    console.log(`Accelerating to ${this.speed} km/h`);
    // Code for accelerating to the specified speed
  }
}

// Usage
const car = new Car();
const accelerateCommand = new AccelerateCommand(100);

car.executeCommand(accelerateCommand); // Output: Accelerating to 100 km/h
