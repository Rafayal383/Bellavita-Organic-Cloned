export const Box = ({ img1, img, pname, offprice, price, Ratings }) => {
  return ` <div>

  <div id="best">
      <img src="${img1}"
          alt="">
          
  </div>

  <div id="off">35% OFF</div>

  <div id="image">

  <img id="product_img" src=${img} 
      alt="">
   
      <i id="wishlist" class="fa-regular fa-heart"></i>

  </div>

  <p id="bigp">${pname}</p><br>
  <p id="smallp"></p>

  <div id="price">
      <p><i class="fa-solid fa-indian-rupee-sign"></i>${offprice}</p>
      <p><i class="fa-solid fa-indian-rupee-sign"></i>${price}</p>

  </div>

  <div id="star">
      <i class="fa-sharp fa-solid fa"><i class="fa-solid fa-star">${Ratings}</i></i>

  </div>

  <button id="button">Add to Cart</button>

</div>
`;
};
