// Factory Pattern: Define car factory
class CarFactory {
  createCar(type) {
    switch (type) {
      case 'sedan':
        return new SedanCar();
      case 'suv':
        return new SUVCar();
      default:
        throw new Error(`Invalid car type: ${type}`);
    }
  }
}

// Factory Pattern: Define car classes
class SedanCar {
  constructor() {
    this.type = 'Sedan';
  }
}

class SUVCar {
  constructor() {
    this.type = 'SUV';
  }
}

// Builder Pattern: Define car builder
class CarBuilder {
  constructor() {
    this.car = {};
  }

  addEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  addTransmission(transmission) {
    this.car.transmission = transmission;
    return this;
  }

  addWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  build() {
    return this.car;
  }
}

// Singleton Pattern: Define car database
class CarDatabase {
  constructor() {
    if (CarDatabase.instance) {
      return CarDatabase.instance;
    }
    this.cars = [];
    CarDatabase.instance = this;
  }

  addCar(car) {
    this.cars.push(car);
  }

  getAllCars() {
    return this.cars;
  }
}

// Prototype Pattern: Define car prototype
const carPrototype = {
  color: 'white',
  doors: 4,
  drive: function() {
    console.log(`Driving the ${this.color} car with ${this.doors} doors`);
  }
};

// Use the design patterns
const carFactory = new CarFactory();

// Create a sedan car using the factory pattern
const sedanCar = carFactory.createCar('sedan');
console.log(sedanCar.type); // Output: Sedan

// Use the builder pattern to create a custom SUV car
const suvCarBuilder = new CarBuilder();
suvCarBuilder.addEngine('V8').addTransmission('Automatic').addWheels('Alloy');
const suvCar = suvCarBuilder.build();
console.log(suvCar); // Output: { engine: 'V8', transmission: 'Automatic', wheels: 'Alloy' }

// Use the singleton pattern to add cars to a database
const carDatabase = new CarDatabase();
carDatabase.addCar(sedanCar);
carDatabase.addCar(suvCar);
const allCars = carDatabase.getAllCars();
console.log(allCars); // Output: [ SedanCar { type: 'Sedan' }, { engine: 'V8', transmission: 'Automatic', wheels: 'Alloy' } ]

// Use the prototype pattern to create a new red car based on the car prototype
const redCar = Object.create(carPrototype);
redCar.color = 'red';
redCar.doors = 2;
redCar.drive(); // Output: Driving the red car with 2 doors
