class LuxuryCar {
    constructor(make, model, color, engine) {
      this.make = make;
      this.model = model;
      this.color = color;
      this.engine = engine;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}, Color: ${this.color}, Engine: ${this.engine}`;
    }
  }
  
  module.exports = {
    LuxuryCar
  };
  