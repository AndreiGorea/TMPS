# Car Design Patterns Project

## Introduction/Theory/Motivation
This project demonstrates the implementation of various structural design patterns in JavaScript, focusing on the domain of cars. The motivation behind using design patterns is to enhance the flexibility, extensibility, and maintainability of the codebase. By leveraging design patterns, we can separate concerns, encapsulate variations, and promote code reusability.

## Implementation & Explanation

### Car Model
The `Car` class represents a basic car with attributes such as make, model, and color. It provides a `getDetails()` method that returns a string with the details of the car.

```javascript
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Color: ${this.color}`;
  }
}
```

### CarComposite Model
The `CarComposite` class represents a composite car, which can hold multiple cars. It maintains an internal list of cars and provides methods to add cars to the composite and retrieve the details of all the cars in the composite. The `getDetails()` method iterates over the cars in the composite, calls their `getDetails()` method, and returns a concatenated string of the car details.

```javascript
class CarComposite {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  getDetails() {
    const details = this.cars.map((car) => car.getDetails());
    return `Composite Car Details:\n${details.join("\n")}`;
  }
}
```

### LuxuryCar Model
The `LuxuryCar` class represents a luxury car, extending the basic `Car` class. It introduces additional attributes such as the engine. The `getDetails()` method is overridden to include the luxury edition details in the returned string.

```javascript
class LuxuryCar extends Car {
  constructor(make, model, color, engine) {
    super(make, model, color);
    this.engine = engine;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Color: ${this.color}, Engine: ${this.engine}`;
  }
}
```

### LuxuryCarAdapter Pattern
The `LuxuryCarAdapter` class implements the adapter pattern. It adapts a `LuxuryCar` object to conform to the `Car` interface. The adapter wraps the `LuxuryCar` object and provides a `getDetails()` method that appends the string "Luxury" to the details obtained from the adapted luxury car.

```javascript
class LuxuryCarAdapter {
  constructor(luxuryCar) {
    this.luxuryCar = luxuryCar;
  }

  getDetails() {
    return `Luxury ${this.luxuryCar.getDetails()}`;
  }
}
```

### CarBridge Pattern
The `CarBridge` class demonstrates the bridge pattern. It decouples the abstraction (represented by the `Car` class) from its implementation details (represented by the `engine` attribute). The `CarBridge` constructor takes in make, model, color, and engine parameters. It creates an instance of the `Car` class and stores it internally. The `getDetails()` method combines the details obtained from the car object with the engine details to form the final car details string.

```javascript
const { Car } = require('./models/Car');

class CarBridge {
  constructor(make, model, color, engine) {
        this.car = new Car(make, model, color);
    this.engine = engine;
  }

  getDetails() {
    return `${this.car.getDetails()}, Engine: ${this.engine}`;
  }
}
```

### LuxuryCarDecorator Pattern
The `LuxuryCarDecorator` class showcases the decorator pattern. It dynamically adds luxury edition functionality to a car object. The decorator takes an instance of the `Car` class as input and wraps it. The `getDetails()` method of the decorator adds the string "Luxury Edition" to the details obtained from the decorated car, producing the final decorated car details string.

```javascript
class LuxuryCarDecorator {
  constructor(car) {
    this.car = car;
  }

  getDetails() {
    return `${this.car.getDetails()}, Luxury Edition`;
  }
}
```

### Usage

```javascript
// Create a car using the bridge pattern
const carWithBridge = new CarBridge("Toyota", "Camry", "Red", "V6");
console.log(carWithBridge.getDetails());

// Create a luxury car using the adapter pattern
const luxuryCar = new LuxuryCar("Mercedes", "S-Class", "Black", "V8");
const luxuryCarAdapter = new LuxuryCarAdapter(luxuryCar);
console.log(luxuryCarAdapter.getDetails());

// Create a composite car and add cars to it
const compositeCar = new CarComposite();
const car1 = new Car("Honda", "Accord", "Silver");
const car2 = new Car("Ford", "Mustang", "Blue");
compositeCar.addCar(car1);
compositeCar.addCar(car2);
console.log(compositeCar.getDetails());

// Decorate a car with luxury edition using the decorator pattern
const car = new Car("Nissan", "Altima", "White");
const luxuryCarDecorator = new LuxuryCarDecorator(car);
console.log(luxuryCarDecorator.getDetails());
```

## Conclusions
Upon running the project, you will observe the following results:

- The `CarBridge` pattern allows us to create a car object with an engine and retrieve its details, demonstrating the decoupling between the car abstraction and the engine implementation.
- The `LuxuryCarAdapter` pattern enables us to adapt a `LuxuryCar` object to behave like a regular car object, retrieving the adapted luxury car details seamlessly.
- The `CarComposite` pattern allows us to create a composite car object that can hold multiple cars and retrieve the details of all the cars in the composite.
- The `LuxuryCarDecorator` pattern demonstrates the dynamic addition of luxury edition functionality to a car object, enhancing its details.

By implementing these design patterns, we achieve a more modular and maintainable codebase, allowing for easier extension and modification of car-related functionalities in the future.

Feel free to explore the code and experiment with different scenarios to further understand the usage and benefits of these design patterns.
