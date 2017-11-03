var pizzaSize;
var cheapToppings = [];
var expensiveToppings = [];

function Pizza(size, cheapToppings, expensiveToppings) {
  this.size = size;
  this.cheapToppings = cheapToppings;
  this.expensiveToppings = expensiveToppings;
};

Pizza.prototype.pizzaPrice = function() {
  var pizzaPrice = 10
  if (this.size == "small") {
    pizzaPrice = pizzaPrice - 1;
  } else if (this.size == "large") {
    pizzaPrice = pizzaPrice + 2;
  }
  if (cheapToppings.length >= 1) {
    pizzaPrice = pizzaPrice + (cheapToppings.length * 1.5)
  }
  if (expensiveToppings.length >= 1) {
    pizzaPrice = pizzaPrice + (expensiveToppings.length * 2.5)
  }
  return pizzaPrice

}



//end of Business Logic
$(document).ready(function() {
  $("#size-add").click(function (event){
    event.preventDefault();
    pizzaSize = $("select#size-select").val();
    $(".toppings").show();
    $("#tier-one-toppings").submit(function (event){
      event.preventDefault();
      $("input:checkbox[name=cheap-topping]:checked").each(function() {
      var allCheapToppings = $(this).val();
      cheapToppings.push(allCheapToppings);
    });//end of 'add'' cheap toppings select
        console.log(cheapToppings);
        console.log('ct ' + cheapToppings);
    $("#tier-two-toppings").submit(function (event){
      event.preventDefault();
      var expensiveToppings = [];
      $("input:checkbox[name=expensive-topping]:checked").each(function() {
      var allExpensiveToppings = $(this).val();
      expensiveToppings.push(allExpensiveToppings);
  });//end of 'add' exp toppings select
      console.log(expensiveToppings);
      console.log('et' + expensiveToppings);
});
});



  }); //end of size select
  var yourPizza = new Pizza(pizzaSize, cheapToppings, expensiveToppings);
  console.log(yourPizza.pizzaPrice());
});//end of doc ready
