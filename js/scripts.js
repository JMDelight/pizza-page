// Back-end logic
var pizzaCart = []

function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 8;
};

Pizza.prototype.pizzaName = function() {
  return capitalizeFirstLetter(this.size) + " Pizza";
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  return this.toppings;
};

Pizza.prototype.getPrice = function() {
  if (this.size === "small") {
    var workingPrice = 7;
    var priceAdjuster = 1;
  } else if(this.size === "medium") {
    var workingPrice = 10;
    var priceAdjuster = 2;
  } else if (this.size === "large") {
    var workingPrice = 13;
    var priceAdjuster = 3;
  } else {
    console.log("There was an illegal size on the Pizza object.");
  }
  for(i = 1; i <= this.toppings.length; i ++) {
    workingPrice += priceAdjuster
  };
    this.price = "$" + workingPrice;
    return this.price;
};

var capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    $(".pizza-list").append("<li><span class='user-pizza'>" + newPizza.pizzaName() + "    " + newPizza.price + "</span></li>");
  });
});
