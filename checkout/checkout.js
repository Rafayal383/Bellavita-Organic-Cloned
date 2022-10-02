
let cartData= JSON.parse(localStorage.getItem("cart"))
console.log(cartData)
let sum=0;
let save_data= document.querySelector(".saveddata");


function  showtable(img,pname,price){

let div = document.createElement('div');


let image= document.createElement('img');
image.src=`${img}`;

let para_div=document.createElement('div');
let para_ =document.createElement('p');
para_.innerHTML= pname;
para_div.append(para_)

let para_2 =document.createElement('p');
para_2.innerHTML=`₹ <span id="amount">${price}</span>`;
sum=sum+Number(price)

div.append(image,para_div,para_2);
save_data.append(div);
}

cartData.forEach(({img,price,pname}) => {
        showtable(img,pname,price)
        console.log(img)
});


let netamt=document.querySelector('.netamt');
netamt.innerHTML = sum;

let GST= sum*0.28;
let taxdes=document.querySelector(".one>p");
taxdes.innerHTML=`including ₹${GST} in taxes`;

document.querySelector(".netamt2").innerHTML=sum+GST




