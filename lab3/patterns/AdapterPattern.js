class LuxuryCarAdapter {
    constructor(luxuryCar) {
      this.luxuryCar = luxuryCar;
    }
  
    getDetails() {
      return `Luxury ${this.luxuryCar.getDetails()}`;
    }
  }
  module.exports = {
    LuxuryCarAdapter
  };