let data = JSON.parse(localStorage.getItem("cart")) || [];
// let total_amount = document.querySelector("#total_amount");
display(data);
function display(data) {
  let menu = document.getElementById("content");
  menu.innerHTML = null;
  //   let total = 0;
  //   total_amount.innerHTML = "";
  data.forEach(function (el, i) {
    let div = document.createElement("div");
    div.id = "card";
    let box = document.createElement("div");
    box.id = "parabox";
    let pname = document.createElement("p");
    pname.innerText = el.pname;
    let price = document.createElement("p");
    price.innerText = "Rs." + el.price;

    let image = document.createElement("img");
    image.src = el.img;

    let icon = document.createElement("i");
    icon.className = "fa-regular fa-trash-can";
    icon.id = "remove";
    icon.addEventListener("click", function () {
      remove_product(el, i);
    });
    //     total += +el.price;
    box.append(pname, price);
    div.append(image, box, icon);
    menu.append(div);
  });
}

//   total_amount.append(total);

function remove_product(el, i) {
  data.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  display(data);
}
