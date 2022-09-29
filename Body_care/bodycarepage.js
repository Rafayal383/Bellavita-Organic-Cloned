// import allProducts from "../DataAll/alProduct.js";
import bodycaredata from "../DataAll/body_care.js";
import { Box } from "../DataAll/box.js";
let product_array = bodycaredata;

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
  window.location.href = "#";
}
function productPage() {
  window.location.href = "single.html";
}

document.querySelector("#SortBy").addEventListener("change", handlePriceSort);
function handlePriceSort() {
  let selected = document.querySelector("#SortBy").value;
  if (selected == "price-ascending") {
    product_array.sort(function (a, b) {
      let x = +a.price;
      let y = +b.price;
      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    });
    productAppend(product_array);
    console.log("abc");
  }
  if (selected == "price-descending") {
    product_array.sort(function (a, b) {
      let x = +a.price;
      let y = +b.price;
      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    });
    productAppend(product_array);
  }
  if (selected == "title-descending") {
    product_array.sort(function (a, b) {
      let x = a.pname;
      let y = b.pname;
      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    });
    productAppend(product_array);
  }
  if (selected == "title-ascending") {
    product_array.sort(function (a, b) {
      let x = a.pname;
      let y = b.pname;
      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    });
    productAppend(product_array);
  }
  if (selected == "selected") {
    productAppend(product_array);
  }
  if (selected == "best-selling") {
    product_array = product_array.filter(function (el) {
      return (
        el.img1 ==
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733"
      );
    });
    productAppend(product_array);
  }
}

// let total = document.getElementById("total").innerHTML;
// total = product_array.length;
// let sort = document.querySelector(".sort_section");
// sort.append(total);