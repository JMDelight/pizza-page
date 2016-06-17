function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  return this.toppings;
}

Pizza.prototype.getPrice = function() {
  this.price = "$10";
  return this.price;
}
