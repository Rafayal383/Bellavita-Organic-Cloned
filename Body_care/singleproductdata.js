let data = JSON.parse(localStorage.getItem("products")) || null;
import { productdetail } from "./singe.js";

const productAppend = ({ pname, img2, price, offprice, Ratings }) => {
  console.log(pname);
  console.log(img2);
  console.log(price);
  console.log(offprice);
  console.log(Ratings);
  let container = document.getElementById("outermain");
  container.innerHTML = null;

  let div = document.createElement("div");
  div.innerHTML = productdetail({ pname, img2, price, offprice, Ratings });
  container.append(div);
};

productAppend(data);
