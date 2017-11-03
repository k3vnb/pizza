function Pizza(size, cheapToppings, expensiveToppings) {
  this.size = size;
  this.cheapToppings = cheapToppings;
  this.expensiveToppings = expensiveToppings;
};

Pizza.prototype.pizzaPrice = function() {
  console.log("pizzaPrice");
  var pizzaPrice = 10
  if (this.size == "small") {
    pizzaPrice = pizzaPrice - 1;
  } else if (this.size == "large") {
    pizzaPrice = pizzaPrice + 2;
  } return pizzaPrice;
}

$(document).ready(function() {
  $("#size-add").click(function (event){
    event.preventDefault();
    var pizzaSize = $("select#size-select").val();
    console.log(pizzaSize);
    var yourPizza = new Pizza(pizzaSize);
    console.log(yourPizza.pizzaPrice());
  })//end of Size Select
});//end of doc ready
