// import allProducts from "../DataAll/alProduct.js";
import navbar from "../common_Style/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import bestsellerdata from "../DataAll/bestSeller.js";
//import { Box } from "../DataAll/box.js";
let product_array = bestsellerdata;
console.log("aabrakadaabra");

const showProduct = ({ img1, img, img2, pname, offprice, price, Ratings }) => {
  let obj = {
    img1,
    img,
    img2,
    pname,
    offprice,
    price,
    Ratings,
  };
  localStorage.setItem("products", JSON.stringify(obj));
  window.location.href = "single.html";
};
let wishlist_data = JSON.parse(localStorage.getItem("wishlist")) || [];
const addtowishlist = ({
  img1,
  img,
  img2,
  pname,
  offprice,
  price,
  Ratings,
}) => {
  alert("Added to Wishlist");
  wishlist_data.push({
    img1,
    img,
    img2,
    pname,
    offprice,
    price,
    Ratings,
  });
  localStorage.setItem("wishlist", JSON.stringify(wishlist_data));
};
let cart_data = JSON.parse(localStorage.getItem("cart")) || [];
const addtocart = ({ img1, img, img2, pname, offprice, price, Ratings }) => {
  cart_data.push({ img1, img, img2, pname, offprice, price, Ratings });
  localStorage.setItem("cart", JSON.stringify(cart_data));
  alert("Added To Cart");
};

const productAppend = (data) => {
  let container = document.getElementById("main");
  container.innerHTML = null;
  data.forEach(({ img1, img, img2, pname, offprice, price, Ratings }) => {
    let div = document.createElement("div");

    let img_1 = document.createElement("div");
    img_1.innerHTML = `<img src="${img1}"
    alt="">`;
    img_1.id = "best";
    let off = document.createElement("div");
    off.innerText = `35% OFF`;
    off.id = "off";
    let image_div = document.createElement("div");
    image_div.id = "image";
    image_div.innerHTML = `<img id="product_img" src=${img} 
    alt="">
 <div class="inner">
 <img src=${img2} /></div>`;
    image_div.addEventListener("click", function () {
      showProduct({ img1, img, img2, pname, offprice, price, Ratings });
    });
    let wishlist = document.createElement("i");
    wishlist.id = "wishlist";
    wishlist.className = "fa-regular fa-heart";
    wishlist.addEventListener("click", function () {
      addtowishlist({ img1, img, img2, pname, offprice, price, Ratings });
    });
    let p_name = document.createElement("div");
    p_name.innerHTML = `<p id="bigp">${pname}</p><br>
<p id="smallp"></p>`;
    let price_div = document.createElement("div");
    price_div.id = "price";
    price_div.innerHTML = `<p><i class="fa-solid fa-indian-rupee-sign"></i>${offprice}</p>
<p><i class="fa-solid fa-indian-rupee-sign"></i>${price}</p>`;
    let star = document.createElement("div");
    star.id = "star";
    star.innerHTML = `<i class="fa-sharp fa-solid fa"><i class="fa-solid fa-star">${Ratings}</i></i>`;
    let addItem = document.createElement("button");
    addItem.innerText = "Add to Cart";
    addItem.id = "addtocart";
    addItem.addEventListener("click", function () {
      addtocart({ img1, img, img2, pname, offprice, price, Ratings });
    });
    div.append(
      img_1,
      off,
      image_div,
      wishlist,
      p_name,
      price_div,
      star,
      addItem
    );
    container.append(div);
  });
};

console.log(product_array);

productAppend(product_array);

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
