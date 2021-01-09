document.addEventListener('DOMContentLoaded', function() {
  var item = document.getElementsByClassName("productslisting")[0];
  var clone = item.cloneNode(true);
  /*Id of the element below which you want to clone*/
  document.getElementsByClassName("productscontainer")[0].appendChild(clone);
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
      const item = furnitureData[index]
      var itemDiv = document.getElementsByClassName("productslisting")[0];
      var clone = itemDiv.cloneNode(true);
      const furniturename = clone.querySelector(".furniture-name");
      console.log("furniturename", furniturename)
      furniturename.setAttribute('href',`Detailed.html?id=${item._id}`);
      const furnituredescription = clone.querySelector(".description");
      const furnitureprice = clone.querySelector(".price");
      furniturename.innerText= item.name
      furnituredescription.innerText= item.description
      furnitureprice.innerText= item.price
      document.getElementsByClassName("productscontainer")[0].appendChild(clone);
    }
}
