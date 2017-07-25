var price = 0;
var item = "";
var total = 0;

var grocery = [                   /* an array named grocery[] with various objects within it. The objects have 2 properties;
                                     1) the name of the grocery item 
                                     2) the price of the grocery item */
  
  { name: "Grapes", price: 2.50 },
  
  { name: "Bacon", price: 5.75},
  
  { name: "Cheez-its", price: 1.99 },
  
  { name: "Lettuce", price: 0.99 },
  
  { name:"Bottled Water", price: 3.75 }
  
]; // end of grocery[] array                           
  
grocery.forEach(function(list){                     // forEach loop: steps through the grocery[] array. function(list) is the name of this funtion
  
  price = list.price;
  item = list.name;
  total += list.price;
  
  console.log(item + " " + "$" + price);
});

function tax(num){                                  // function to calculate tax of the grocery bill 
 return num * 1.06;
}

total = tax(total);                                 // function call for tax()

console.log("Total (w/tax): $" + total.toFixed(2)); // prints total with the tax included

var container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

var groceryList = document.createElement("ol");
groceryList.setAttribute("id", "groceryList");
container.appendChild(groceryList);




for(var i = 0; i < grocery.length; i++){
  var item = document.createElement("li");
  item.innerHTML = grocery[i].name + " $" + grocery[i].price;
  groceryList.appendChild(item);
}

var pageTotal = document.createElement("p");
pageTotal.innerHTML = "Total: $" + total.toFixed(2);
container.appendChild(pageTotal);


