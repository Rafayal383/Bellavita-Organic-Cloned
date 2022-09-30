// import allProducts from "../DataAll/alProduct.js";
import bestsellerdata from "../DataAll/bestSeller.js";
import { Box } from "../DataAll/box.js";
let product_array = bestsellerdata;
console.log("aabrakadaabra");

const productAppend = (data) => {
  let container = document.getElementById("main");
  container.innerHTML = null;
  data.forEach(({ img1, img, img2, pname, offprice, price, Ratings }) => {
    let div = document.createElement("div");
    div.innerHTML = Box({ img1, img, img2, pname, offprice, price, Ratings });
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
console.log(product_array);

productAppend(product_array);

function addTocart() {
  window.location.href = "single.html";
}
function productPage() {
  window.location.href = "#";
}

