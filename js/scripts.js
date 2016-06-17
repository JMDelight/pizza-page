function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 8;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  return this.toppings;
};

Pizza.prototype.getPrice = function() {
  if (this.size === "small") {
    var workingPrice = 8;
    var priceAdjuster = 0.7;
  } else if(this.size === "medium") {
    var workingPrice = 10;
    var priceAdjuster = 1.35;
  } else if (this.size === "large") {
    var workingPrice = 12;
    var priceAdjuster = 2;
  } else {
    console.log("There was an illegal size on the Pizza object.");
  }
  this.toppings.forEach(function(topping) {
    workingPrice += priceAdjuster;
  });
  this.price = "$" + workingPrice;
  return this.price;
};
