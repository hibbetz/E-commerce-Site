document.addEventListener('DOMContentLoaded', function() {
            const productIDsstring = localStorage.getItem(`Selected-Products`);
            let productIDs = []
            if (productIDsstring){
              productIDs = productIDsstring.split(`,`)
            } else {return}
            let furnitureRequest = new XMLHttpRequest();
            furnitureRequest.open("GET",`http://localhost:3000/api/furniture/`);
            furnitureRequest.onload = function() {
                var furnitureData = JSON.parse(furnitureRequest.response);
                const results = []
                furnitureData.forEach((furniture) => {
                  if (productIDs.includes(furniture._id) === true) {
                    results.push(furniture)
                  }
                });
                createList(results)
            }
              furnitureRequest.send();
              const createList = (results) => {
                var totalPrice = 0
                for (index in results) {
                    const item = results[index]
                    totalPrice = totalPrice + item.price
                    console.log(`item`, item)
                    var itemDiv = document.getElementsByClassName("cart-items")[0];
                    var clone = itemDiv.cloneNode(true);
                    const cartItemName = clone.querySelector(".cart-item-title");
                    const cartItemPrice = clone.querySelector(".cart-price");
                    const cartItemImage = clone.querySelector(".cart-item-image");
                    cartItemName.innerText= item.name
                    cartItemPrice.innerText= item.price
                    cartItemImage.src= item.imageUrl
                    document.getElementsByClassName("cart-row")[0].appendChild(clone);
                };
                var totalDiv = document.getElementsByClassName(`cart-total-price`)[0];
                totalDiv.innerText = totalPrice
                console.log(`totalPrice`, totalPrice)
            }
});
