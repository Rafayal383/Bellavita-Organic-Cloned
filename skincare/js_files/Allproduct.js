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