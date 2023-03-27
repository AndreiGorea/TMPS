# Car Design Patterns

This is a JavaScript script that demonstrates the use of four different design patterns (Factory Pattern, Builder Pattern, Singleton Pattern, and Prototype Pattern) to create a car object.
### Getting Started

To run the script, you need to have Node.js installed on your computer. If you don't have it installed already, you can download it from the official website: https://nodejs.org.

    Clone or download the repository to your local machine.
    Open a terminal or command prompt and navigate to the directory where you saved the files.
    Run the script using Node.js by typing node car-design-patterns.js in the terminal.
    The output of the script should appear in the terminal.

## Design Patterns Used:

### Factory Pattern

The Factory Pattern is used to create different types of car objects based on a given input. In this script, the factory function createCar() takes a type parameter and returns an object of the corresponding car type.
Builder Pattern

### Builder Pattern

The Builder Pattern is used to create a complex object step-by-step. In this script, the CarBuilder class is used to create a car object by setting its properties one-by-one using a chain of method calls.
Singleton Pattern

### Singleton Pattern

The Singleton Pattern is used to ensure that only one instance of a class is created and used throughout the application. In this script, the CarSingleton class is used to create a singleton instance of a car object.
Prototype Pattern

### Prototype Pattern

The Prototype Pattern is used to create new objects by cloning an existing object. In this script, the CarPrototype class is used to create a prototype object that can be cloned to create new car objects.

## Examples:

Here are some examples of how to use the different design patterns in the script:

### Factory Pattern

#### To create a sedan car object:

```javascript

const carFactory = require('./car-factory');

const sedan = carFactory.createCar('sedan');
console.log(sedan.getDescription()); // Output: This is a sedan car.
```

#### To create a SUV car object:

```javascript
const carFactory = require('./car-factory');

const suv = carFactory.createCar('suv');
console.log(suv.getDescription()); // Output: This is a SUV car.
```

### Builder Pattern

#### To create a car object using the builder pattern:

```javascript

const CarBuilder = require('./car-builder');

const carBuilder = new CarBuilder();
const car = carBuilder.setMake('Toyota').setModel('Corolla').setColor('blue').setYear(2021).build();
console.log(car); // Output: { make: 'Toyota', model: 'Corolla', color: 'blue', year: 2021 }
```

### Singleton Pattern

#### To create a singleton instance of a car object:

```javascript

const CarSingleton = require('./car-singleton');

const car1 = new CarSingleton();
car1.make = 'Honda';
car1.model = 'Civic';
car1.color = 'red';
car1.year = 2020;

const car2 = new CarSingleton();
console.log(car2); // Output: { make: 'Honda', model: 'Civic', color: 'red', year: 2020 }
```

### Prototype Pattern

#### To create a prototype object using the prototype pattern:

```javascript

const CarPrototype = require('./car-prototype');

const carPrototype = new CarPrototype('sedan', 'Toyota', 'Camry', 'black', 2022);
const car1 = carPrototype.clone();
car1.color = 'white';
const car2 = carPrototype.clone();
car2.year = 2023;

console.log(car1); // Output: { type: 'sedan', make: 'Toyota', model: 'Camry', color: 'white', year: 2022 }
console.log(car2); // Output: { type: 'sedan', make: 'Toyota', model: 'Camry', color: 'black', year: 2023 }
```

##### Acknowledgements

This script is based on the design patterns described in the book "Head First Design Patterns" by Eric Freeman and Elisabeth Robson.
