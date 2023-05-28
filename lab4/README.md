# Car Behavioral Design Patterns Project

## Introduction/Theory/Motivation

This project demonstrates the implementation of three popular behavioral design patterns in JavaScript: Command, Observer, and Strategy. The project focuses on the functionality of a car. The motivation behind using design patterns is to improve code organization, reusability, and maintainability by providing effective solutions to common design problems.

## Implementation & Explanation

### Command Pattern

The `Command pattern` encapsulates a request as an object, allowing you to parameterize clients with different requests, queue or log requests, and support undoable operations. In the context of this project, we can use the `Command pattern` to represent and execute various car commands.

```javascript
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
  }
}
```

### Implementation

```javascript
const car = new Car();
const accelerateCommand = new AccelerateCommand(100);

car.executeCommand(accelerateCommand); // Output: Accelerating to 100 km/h
```

`Car` class represents a car that maintains a list of commands. It provides the `executeCommand(command)` method to add commands to the list and execute them.
`AccelerateCommand` class is a concrete command that represents the command to accelerate the car. It stores the speed to which the car should be accelerated and implements the `execute()` method to perform the acceleration.

### Observer Pattern

The `Observer` pattern allows objects (observers) to subscribe and receive updates from a subject when its state changes. In the context of this project, we can apply the Observer pattern to monitor and notify various car-related events.

```javascript
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
```

### Implementation

```javascript
const car = new Car();
const speedometer = new Speedometer();

car.addObserver(speedometer);
car.setSpeed(80);
```

`Car` class represents a car that maintains a list of observers. It provides methods to add observers, remove observers, set the car's speed, and notify the observers when the speed changes.
`Speedometer` class is an observer that displays the current speed of the car. It implements the `update(speed)` method to receive speed updates from the car subject.

### Strategy Pattern

The `Strategy pattern` defines a family of interchangeable algorithms or strategies encapsulated within separate classes. It enables selecting different strategies dynamically based on specific conditions or requirements. In the context of this project, we can use the Strategy pattern to implement different car driving strategies.

```javascript
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
  }
}
```

### Implementation

```javascript
const car = new Car(new EcoMode());
car.accelerate();

car.setStrategy(new SportMode());
car.accelerate();
```

`Car` class represents a car that can be configured with a driving strategy. It provides methods to set the driving strategy and accelerate the car.
`EcoMode` and `SportMode` classes are concrete strategy classes that implement the `accelerate()` method according to the specific driving mode.

## Conclusions

In this project, we have implemented the Command, Observer, and Strategy patterns to handle different aspects of car behavior. The `Command` pattern allows us to encapsulate and execute car commands. The `Observer` pattern enables us to monitor and notify observers about car events. The `Strategy` pattern provides flexibility in selecting different driving strategies.

By applying these design patterns, we achieve code modularity, extensibility, and maintainability in managing car-related functionality. Feel free to explore and modify the code to further understand and adapt the patterns to your specific requirements.
