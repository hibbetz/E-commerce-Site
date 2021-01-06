document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded")
  var item = document.getElementsByClassName("list-group-item")[0];
  var clone = item.cloneNode(true);
  /*Id of the element below which you want to clone*/
  document.getElementsByClassName("list-group shadow")[0].appendChild(clone);

  let furnitureRequest = new XMLHttpRequest();
  furnitureRequest.open("GET","http://localhost:3000/api/furniture");
  furnitureRequest.onload = function() {
      var furnitureData = JSON.parse(furnitureRequest.response);
      createList(furnitureData);
    };
  furnitureRequest.send();
}, false);
//clone and append through JS//

const createList = (furnitureData) => {
    for (index in furnitureData) {
      const item = furnitureData[index]
      var itemDiv = document.getElementsByClassName("list-group-item")[0];
      var clone = itemDiv.cloneNode(true);
      const furniturename = clone.querySelector(".furniture-name");
      const furnituredescription = clone.querySelector(".description");
      const furnitureprice = clone.querySelector(".price");
      furniturename.innerText= item.name
      furnituredescription.innerText= item.description
      furnitureprice.innerText= item.price
      document.getElementsByClassName("list-group shadow")[0].appendChild(clone);
    }
}
