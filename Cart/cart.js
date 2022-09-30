let data = JSON.parse(localStorage.getItem("cart")) || [];
// let total_amount = document.querySelector("#total_amount");
display(data);
function display(data) {
  let menu = document.getElementById("content");
  menu.innerHTML = "";
  //   let total = 0;
  //   total_amount.innerHTML = "";
  data.forEach(function (el, i) {
    let div = document.createElement("div");
    let pname = document.createElement("h3");
    pname.innerText = el.pname;
    let image = document.createElement("img");
    image.src = el.img;
    let price = document.createElement("p");
    price.innerText = el.price;
    let icon = document.createElement("i");
    icon.className = "fa-light fa-trash-can";
    icon.id = "remove";
    icon.addEventListener("click", function () {
      remove_product(el, i);
    });
    //     total += +el.price;
    div.append(image, pname, price, icon);
    menu.append(div);
  });
}

//   total_amount.append(total);

function remove_product(el, i) {
  data.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  display(data);
}
