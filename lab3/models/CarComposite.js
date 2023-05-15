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

module.exports = {
    CarComposite
  };