document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded")
  const furniturename = document.getElementById("furniturename");
  const furnituredescription = document.getElementById("description");
  const furnitureprice = document.getElementById("price");

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
