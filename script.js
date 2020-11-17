document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded")
  const furniturename = document.getElementById("furniturename");
  console.log(furniturename)

  let furnitureRequest = new XMLHttpRequest();
  furnitureRequest.open("GET","http://localhost:3000/api/furniture");
  furnitureRequest.send()
  // furnitureRequest.onload = function() {
  //     var furnitureData = JSON.parse(furnitureRequest.response);
  //     renderHTML(furnitureData);
  //   };
  // furnitureRequest.send();
  // });
  //
  // furnitureRequest.onreadystatechange=() =>{
  //   if (furnitureRequest.readyState=== 4){
  //     const response = JSON.parse(furnitureRequest);
  //     furniturename.textContent= response.name[0]
  //   }
  // }
}, false);
