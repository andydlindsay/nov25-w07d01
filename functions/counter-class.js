class Counter {
  constructor() {
    this.counter = 0;
  };
  incrementCounter() {
    this.counter++;
    return this.counter;
  };
};

module.exports = Counter;
