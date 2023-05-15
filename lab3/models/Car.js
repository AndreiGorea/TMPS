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

module.exports = {
    Car
  };