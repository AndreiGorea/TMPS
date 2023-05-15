class LuxuryCarDecorator {
    constructor(car) {
      this.car = car;
    }
  
    getDetails() {
      return `${this.car.getDetails()}, Luxury Edition`;
    }
  }
  module.exports = {
    LuxuryCarDecorator
  };