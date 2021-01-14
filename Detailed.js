document.addEventListener('DOMContentLoaded', function() {
  var item = document.getElementsByClassName("productslisting");
  document.getElementsByClassName("productscontainer")
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');
  let furnitureRequest = new XMLHttpRequest();
  furnitureRequest.open("GET",`http://localhost:3000/api/furniture/${myParam}`);
  furnitureRequest.onload = function() {
      var furnitureData = JSON.parse(furnitureRequest.response);
      console.log("myParam", furnitureData)
      createList(furnitureData);
    };
  furnitureRequest.send();
}, false);
//clone and append through JS//

const createList = (furnitureData) => {
      const item = furnitureData
      var itemDiv = document.getElementsByClassName("productslisting");
      const furniturename = document.querySelector(".furniture-name");
      console.log("furniturename", furniturename)
      furniturename.setAttribute('href',`Detailed.html?id=${item._id}`);
      const furnituredescription = document.querySelector(".description");
      const furnitureprice = document.querySelector(".price");
      const furnitureimage = document.querySelector(".furnitureImage");
      furniturename.innerText= item.name
      furnituredescription.innerText= item.description
      furnitureprice.innerText= item.price
      furnitureimage.src= item.imageUrl
      document.getElementsByClassName("productscontainer");
}
