
// function handleFormSubmit(event) {
//     event.preventDefault();
//     const userDetails = {
//       sellprice: parseFloat(event.target.sellingPrice.value),
//       product: event.target.product.value,
//     };
  
//     axios
//       .post("https://crudcrud.com/api/0d80570515134ea3b55c4efaa01fb469/productSell", userDetails)
//       .then((response) => {
//         displayUserOnScreen(response.data);
//         updateTotalValue(response.data.sellprice);
//       })
//       .catch((error) => console.log(error));
  
//     // Clearing the input fields
//     document.getElementById("sellingPrice").value = "";
//     document.getElementById("product").value = "";
//   }
  
//   function displayUserOnScreen(userDetails) {
//     const userItem = document.createElement("li");
//     userItem.textContent = `${userDetails.sellprice} - ${userDetails.product}`;
  
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete Product";
//     userItem.appendChild(deleteBtn);
  
//     const userList = document.getElementById("product-list");
//     userList.appendChild(userItem);
  
//     deleteBtn.addEventListener("click", function (event) {
//       axios
//         .delete(`https://crudcrud.com/api/0d80570515134ea3b55c4efaa01fb469/productSell/${userDetails._id}`)
//         .then((response) => {
//           userList.removeChild(userItem);
//           updateTotalValue(-userDetails.sellprice);
//         })
//         .catch((error) => console.log(error));
//     });
//   }
  
//   function updateTotalValue(amount) {
//     const totalValueElement = document.getElementById("total-value");
//     let currentTotal = parseFloat(totalValueElement.textContent.split("Rs ")[1]);
//     currentTotal += amount;
//     totalValueElement.textContent = `Total Value Worth of Products: Rs ${currentTotal.toFixed(2)}`;
//   }
  
//   window.addEventListener("DOMContentLoaded", () => {
//     axios
//       .get("https://crudcrud.com/api/0d80570515134ea3b55c4efaa01fb469/productSell")
//       .then((response) => {
//         response.data.forEach((userDetails) => {
//           displayUserOnScreen(userDetails);
//           updateTotalValue(userDetails.sellprice);
//         });
//       })
//       .catch((error) => console.log(error));
//   });
  



// g

/*
let sum = 0;
const pTag = document.querySelector("p");
//pTag.innerHTML=Rs+${sum};
function handleFormSubmit(event) {
  event.preventDefault();
  const productDetails = {
    product: event.target.product.value,
    price: event.target.price.value,
  };
  //console.log(productDetails);
  axios
    .post(
      "https://crudcrud.com/api/b780a35b8e3b405a9da3ccb9f751b60c/inventoryData",
      productDetails
    )
    .then((response) => {
      displayProductDataOnScreen(response.data);
      sum = sum + Number(response.data.price);
      //console.log(sum);
      pTag.innerHTML = Rs ${sum};
    })
    .catch((err) => {
      console.log(err);
      console.log("error");
    });
  event.target.product.value = "";
  event.target.price.value = "";
}

function displayProductDataOnScreen(productDetails) {
  console.log(productDetails);
  const productList = document.querySelector("ul");
  const newPoduct = document.createElement("li");
  //newPoduct.innerHTML="jhj";
  const text = document.createTextNode(
    ${productDetails.product} - ${productDetails.price}
  );
  newPoduct.appendChild(text);
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete Product"));
  newPoduct.appendChild(deleteBtn);
  productList.append(newPoduct);

  deleteBtn.addEventListener("click", function (event) {
    axios
      .delete(
        https://crudcrud.com/api/b780a35b8e3b405a9da3ccb9f751b60c/inventoryData/${productDetails._id}
      )
      .then(() => {
        event.target.parentElement.remove();
        sum = sum - Number(productDetails.price);
        pTag.innerHTML = Rs ${sum};
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  axios
    .get(
      "https://crudcrud.com/api/b780a35b8e3b405a9da3ccb9f751b60c/inventoryData"
    )
    .then((response) => {
      //console.log(response);
      //let sum=0
      for (let i = 0; i < response.data.length; i++) {
        sum = Number(response.data[i].price) + sum;
        displayProductDataOnScreen(response.data[i]);
      }
      //we can also use local stotrage to solve sum issue 
      pTag.innerHTML = Rs ${sum};
    });
}); 

*/
