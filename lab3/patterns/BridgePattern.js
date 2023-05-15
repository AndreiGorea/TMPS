const { Car } = require('../models/Car');

class CarBridge {
    constructor(make, model, color, engine) {
      this.car = new Car(make, model, color);
      this.engine = engine;
    }
  
    getDetails() {
      return `${this.car.getDetails()}, Engine: ${this.engine}`;
    }
  }
  
  module.exports = {
    CarBridge
  };
  