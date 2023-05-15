// client/main.js
const { Car } = require("./models/Car");
const { CarBridge } = require("./patterns/BridgePattern");
const { LuxuryCar } = require("./models/LuxuryCar");
const { LuxuryCarAdapter } = require("./patterns/AdapterPattern");
const { CarComposite } = require("./models/CarComposite");
const { LuxuryCarDecorator } = require("./patterns/DecoratorPattern");

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

