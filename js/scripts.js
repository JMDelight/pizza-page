// Back-end logic
var pizzaCart = []

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
  for(i = 1; i <= this.toppings.length; i ++) {
    workingPrice += priceAdjuster
  };
    this.price = "$" + workingPrice;
    return this.price;
};

// Front-end logic
$(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var userSize = $("#pizza-size").val();
    var newPizza = new Pizza(userSize);
    var userToppings = $('input[type=checkbox]:checked').map(function(_, toppings) {
      return $(toppings).val();
    });
    newPizza.toppings = userToppings;
    newPizza.getPrice();
    pizzaCart.push(newPizza);

  });
});
