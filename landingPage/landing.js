// import allProducts from "../DataAll/alProduct.js";
import bestsellerdata from "../DataAll/bestSeller.js";
//../DataAll/bestSeller.js    ../DataAll/box.js
let product_array = new Array(4);
for (let i = 0; i < 4; i++) {
  product_array[i] = bestsellerdata[i];
}
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
    // image_div.addEventListener("click", function () {
    //   showProduct({ img1, img, img2, pname, offprice, price, Ratings });
    // });
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

productAppend(product_array);
// function productPage() {
//   window.location.href = "single.html";
// }
