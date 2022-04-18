

//Business logic
function Pizza(toppings1, toppings2, size) {
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.size = size;
  this.price = 0;
};


Pizza.prototype.Toppings = function () {
  if (this.toppings1 === "sausage") {
    this.price += 2;
  } else if (this.toppings1 === "meatballs") {
    this.price += 3;
  } else if (this.toppings1 === "bacon") {
    this.price += 4
  } else if (this.toppings1 === "chicken") {
    this.price += 5;
  }
  if (this.toppings2 === "green_olives") {
    this.price += 1;
  } else if (this.toppings2 === "mushrooms") {
    this.price += 2;
  } else if (this.toppings2 === "blackolives") {
    this.price += 3;
  } else {
    this.price += 4;
  }
};

Pizza.prototype.PickSize = function () {
  if (this.size === "small") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 7;
  } else {
    this.price += 10;
  }
};

Pizza.prototype.CostShow = function () {
  $("#output").show();
  $("#orderTotal").text(this.price);
};

let hereYourPizza = new Pizza();

// User interface logic 
$(document).ready(function () {
  $("#OrderPizza").submit(function (event) {
    event.preventDefault();
    let toppingsFirst = $("#toppings1 option:selected").val();
    let toppingsSecond = $("#toppings2 option:selected").val();
    let sizeOfPizza = $("#sizeMain option:selected").val();
    let PizzaCost = new Pizza(toppingsFirst, toppingsSecond, sizeOfPizza);
    PizzaCost.Toppings();
    PizzaCost.PickSize();
    PizzaCost.CostShow();
  });
});

