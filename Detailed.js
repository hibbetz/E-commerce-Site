document.addEventListener('DOMContentLoaded', function() {
  var item = document.getElementsByClassName("productslisting");
  var button = document.getElementsByClassName("AddCart")[0];
  console.log("hello",button)
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');
  button.onclick = function(){
    appendIDtoCart(myParam)
  };
  document.getElementsByClassName("productscontainer")
  let furnitureRequest = new XMLHttpRequest();
  furnitureRequest.open("GET",`http://localhost:3000/api/furniture/${myParam}`);
  furnitureRequest.onload = function() {
      var furnitureData = JSON.parse(furnitureRequest.response);
      createList(furnitureData);
    };
  furnitureRequest.send();
}, false);
//clone and append through JS//

const appendIDtoCart = (id) => {
  const selectedProducts = localStorage.getItem('Selected-Products');
  if (selectedProducts === null) {
    localStorage.setItem('Selected-Products',`${id}`);
  }
  else {
      localStorage.setItem('Selected-Products',`${selectedProducts},${id}`);
  }
}


const createList = (furnitureData) => {
      const item = furnitureData
      console.log(`Varnishes`, item)
      var itemDiv = document.getElementsByClassName("products-listing");
      const furniturename = document.querySelector(".furniture-name");
      furniturename.setAttribute('href',`Detailed.html?id=${item._id}`);
      const furnituredescription = document.querySelector(".description");
      const furnitureprice = document.querySelector(".price");
      const furnitureimage = document.querySelector(".furnitureImage");
      furniturename.innerText= item.name
      furnituredescription.innerText= item.description
      furnitureprice.innerText= item.price
      furnitureimage.src= item.imageUrl
      var ul = document.getElementById("varnishing-picker");
      item.varnish.forEach((varnish) => {
        var li = document.createElement("option");
        var linkText = document.createTextNode(varnish);
        li.appendChild(linkText);
        ul.appendChild(li);
      })
      // document.getElementsByClassName("products-container");
}

// localStorage.getItem(`Selected-Products`).split(`,`)
