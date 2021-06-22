document.addEventListener('DOMContentLoaded', function() {
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
      var itemDiv = document.getElementsByClassName("productslisting")[0];
      var clone = itemDiv.cloneNode(true);
      const furniturename = clone.querySelector(".furniture-name");
      furniturename.setAttribute('href',`Detailed.html?id=${item._id}`);
      const furnituredescription = clone.querySelector(".description");
      const furnitureprice = clone.querySelector(".price");
      const furnitureimage = clone.querySelector(".furnitureImage");
      furniturename.innerText= item.name
      furnituredescription.innerText= item.description
      furnitureprice.innerText= item.price
      furnitureimage.src= item.imageUrl
      console.log("furniturename", furnitureimage)
      document.getElementsByClassName("productscontainer")[0].appendChild(clone);
    }
}
