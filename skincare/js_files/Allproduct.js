import skinproductData from "./skincare.js"
import { Box } from "./box.js";
let product_array = skinproductData;


localStorage.setItem("skinproductData", JSON.stringify(skinproductData));

let Pdata = JSON.parse(localStorage.getItem("skinproductData"));

const productAppend = (data) => {
  let container = document.getElementById("main");
  container.innerHTML = null;
  data.forEach(({ img1, img, img2, pname, offprice, price,Ratings }) => {
    let div = document.createElement("div");
    div.style.cursor = "pointer"
    div.innerHTML = Box({ img1, img, img2, pname, offprice, price,Ratings });
    container.append(div);
  });

  let buttons = document.getElementById("button");
  buttons.addEventListener("click", function () {
    addTocart();
  });
  let img_product = document.getElementById("product_img");
  img_product.addEventListener("click", function () {
    productPage();
  });
};

productAppend(Pdata)
console.log(product_array);

productAppend(product_array);

function addTocart() {
  window.location.href = "#";
}
// function productPage() {
//   window.location.href = "single.html";
// }

// document.getElementById("filter").addEventListener("click",filter);

// function sortLH(){

//   let Pdata = JSON.parse(localStorage.getItem("skinproductData"));
//  Pdata = Pdata.sort((a,b)=> a.Price - b.Price);

//  productAppend(Pdata)

// }


// function sortHL(){

//   let Pdata = JSON.parse(localStorage.getItem("skinproductData"));
//  Pdata = Pdata.sort((a,b)=> b.Price - a.Price);

//  productAppend(Pdata)

// }