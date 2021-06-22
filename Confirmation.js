document.addEventListener('DOMContentLoaded', function() {
            const productIDs = localStorage.getItem(`Selected-Products`).split(`,`);
            let furnitureRequest = new XMLHttpRequest();
            furnitureRequest.open("POST",`http://localhost:3000/api/furniture/order`);
            furnitureRequest.setRequestHeader("Content-Type", "application/json");
            furnitureRequest.onload = function() {
                var furnitureData = JSON.parse(furnitureRequest.response);
                console.log(furnitureData)
                console.log(productIDs)
                 var orderDiv = document.getElementsByClassName(`orderID`)[0];
                 orderDiv.innerText = furnitureData.orderId
                 createList(furnitureData.products)
            }
            const body = {
              contact: {
                firstName: `Niall`,
                lastName: `Hibbert`,
                address: `dfbsdbn`,
                city: `abusvsdbf`,
                email: `afsdfhsdh`,
              },
              products: productIDs
            }
              furnitureRequest.send(JSON.stringify(body));
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
                };
            });
