let data = JSON.parse(localStorage.getItem("wishlist")) || [];
// let total_amount = document.querySelector("#total_amount");
display(data);
function display(data) {
  let cont = document.getElementById("content");
  cont.innerHTML = null;
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

    let btn = document.createElement("button")
    btn.style.backgroundColor = "#475D4B"
    btn.innerText = "Add to cart";
    btn.style.color = "white";
    

    btn.addEventListener("click",function(){

        addtocart({image, box, icon,btn});

    })

    let cart_data = JSON.parse(localStorage.getItem("wishlist")) || [];
    const addtocart = ({image, box, icon,btn}) => {
      cart_data.push({ image, box, icon,btn });
      localStorage.setItem("cart", JSON.stringify(cart_data));
      alert("Added To Cart");
    };


    let icon = document.createElement("i");
    icon.className = "fa-regular fa-trash-can";
    icon.id = "remove";
    icon.addEventListener("click", function () {
      remove_product(el, i);
    });
    //     total += +el.price;
    box.append(pname, price);
    div.append(image, box, icon,btn);
    cont.append(div);
  });
}

//   total_amount.append(total);

function remove_product(el, i) {
  data.splice(i, 1);
  localStorage.setItem("wishlist", JSON.stringify(data));
  display(data);
}


