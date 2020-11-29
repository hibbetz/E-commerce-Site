document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded")
  const furniturename = document.getElementById("furniturename");
  const furnituredescription = document.getElementById("description");
  const furnitureprice = document.getElementById("price");

  var item = document.getElementByClass("list-group shadow").lastChild;
  var clone = item.cloneNode();
  /*Id of the element below which you want to clone*/
  document.getElementByClass("list-group-item").appendChild(clone);

  let furnitureRequest = new XMLHttpRequest();
  furnitureRequest.open("GET","http://localhost:3000/api/furniture");
  furnitureRequest.onload = function() {
      var furnitureData = JSON.parse(furnitureRequest.response);
         furniturename.textContent= furnitureData[1].name
         furnituredescription.textContent= furnitureData[1].description
         furnitureprice.textContent= furnitureData[1].price
    };
  furnitureRequest.send();
}, false);
//clone and append through JS//
