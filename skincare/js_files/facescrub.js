import FacescrubData from "./skincare_4.js"
import { Box } from "./box.js";
let product_array = FacescrubData;


localStorage.setItem("FacescrubData", JSON.stringify(FacescrubData));

let data = JSON.parse(localStorage.getItem("FacescrubData"));

const productAppend = (data) => {
  let container = document.getElementById("main");
  container.innerHTML = null;
  data.forEach(({ img1, img, img2, pname, offprice, price, Ratings }) => {
    let div = document.createElement("div");
    div.style.cursor = "pointer"
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
  window.location.href = "#";
}
function productPage() {
  window.location.href = "single.html";
}