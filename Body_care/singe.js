export const productdetail = ({ pname, img2, price, offprice, Ratings }) => {
  return ` <div id="main">
  <div id="offerContainer">
      <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Offer-Strip-Banner-v2_1500x.jpg?v=1663852851"
          alt="">
  </div>
  <p>Home > Shop > ${pname}</p>
</div>
<div id="prodGrid">
  <div id="col1">
      <div id="container1">
          <div id="box1">
              <div id="offer">
                  <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733"
                      alt="">
                  <div>35% <br> OFF</div>
              </div>
              <div id="prodImg">
                  <img src=${img2}
                      alt="">
                  <i class="fa-regular fa-heart"></i>
              </div>
          </div>
      </div>
  </div>
  <div id="col2">
      <div id="container2">
          <div id="box2">
              <div id="sec1">
                  <h4>${pname}</h4>
                  <i class="fa-solid fa-share-nodes"></i>
              </div>
              <h5></h5>
              <div id="sec2">
                  <div>
                      <p id="org">${offprice}</p>
                      <p id="strike">${offprice}</p>
                  </div>
                  <div>
                      <p>${Ratings}</p>
                      <i class="fa-solid fa-star"></i>
                  </div>
              </div>
              <p>( inclusive of all taxes )</p>
              <div id="que">
                  <p>|</p>
                  <i class="fa-solid fa-comments"></i>
                  <p>Ask a Question (4) </p>
              </div>
              <div id="btn">
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
              </div>
              <button>ADD TO CART</button>
              <hr>
              <div id="odf">
                  <i class="fa-regular fa-percent"></i>
                  <p>Offers</p>
              </div>
              <div id="cpCode">
                  <div id="nm">10% Discount</div>
                  <div id="dt">NEW10</div>
              </div>
              <p id="ofP">New Users can avail 10% discount on their first order with a minimum order value of
                  ₹499.Cannot be clubbed with any other offers or Bella Cash.</p>
              <div id="cpCode">
                  <div id="nm">10% Discount</div>
                  <div id="dt">NEW10</div>
              </div>
              <p id="ofP">Get 4 products for the price of 3! Just add 4 products to your cart and use the code
                  '4FOR3'.Cannot be clubbed with any other offers or Bella Cash. Offer not valid on Boxes.</p>
              <hr>
              <div id="search">
                  <input id="query" type="text" placeholder="Check for Delivery/COD Availability">
                  <button>Check</button>
              </div>
              <div id="sub">
                  <p>Looking for unisex luxurious fragrances at affordable prices? 🤩</p>
                  <a href="https://bellavitaorganic.com/pages/build-a-box" target="_blank">
                      <p>Read More</p>
                  </a>
              </div>
              <div id="qtyFav">
                  <div><img
                          src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Premium-Natural-Products_v1.png?v=1655992715"
                          alt="">
                      <p>Premium Quality</p>
                  </div>
                  <div>
                      <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Cruelty_Free_V1_1.png?v=1654682279"
                          alt="">
                      <p>Cruelty <br> Free</p>
                  </div>
                  <div>
                      <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Natural_Products.png?v=1654679967"
                          alt="">
                      <p>Natural Products</p>
                  </div>
                  <div>
                      <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dermatologically_Tested_V1_28808c84-164e-4958-8566-261f045213de.png?v=1656054270"
                          alt="">
                      <p>Derma <br> Tested</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
<div id="main2">
  <div>
      <button class="accordion">Performance (As Voted By Our Customers)</button>
      <div class="panel">
          <img src="images/4.9.png" alt="">
          <img src="images/rating.png" alt="">
      </div>
  </div>
</div>
<div id="suggest">
  <h4>You May Also Like</h4>
  <div id="inn">
      <div>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UnisexBox-02_765x.jpg?v=1661759948"
              alt="">
          <h5>LUXURY PERFUME GIFT SET FOR MAN - 4X20ML</h5>
          <P>Eau De Parfum</P>
          <p>₹552.00</p>
          <button>ADD TO CART</button>
      </div>
      <div>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceOil-02_765x.jpg?v=1652341175"
              alt="">
          <h5>LUXURY PERFUME GIFT SET FOR MAN - 4X20ML</h5>
          <P>Eau De Parfum</P>
          <p>₹552.00</p>
          <button>ADD TO CART</button>
      </div>
      <div>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-02_765x.jpg?v=1661760004"
              alt="">
          <h5>LUXURY PERFUME GIFT SET FOR MAN - 4X20ML</h5>
          <P>Eau De Parfum</P>
          <p>₹552.00</p>
          <button>ADD TO CART</button>
      </div>
      <div>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02Medium_765x.jpg?v=1659101350"
              alt="">
          <h5>LUXURY PERFUME GIFT SET FOR MAN - 4X20ML</h5>
          <P>Eau De Parfum</P>
          <p>₹552.00</p>
          <button>ADD TO CART</button>
      </div>
  </div>
</div>
<div id="extra">
  <h4>Legal Information</h4>
  <p>MRP 849.00 inclusive of all taxes</p>
  <p> <b>Marketed By:</b> Bella Vita Luxury ( IDAM Natural Wellness Pvt. Ltd. ) </p>
  <p>417, First Floor, Udyog Vihar Phase 3, Sector 20, Gurugram, 122008 Haryana, India</p>
  <p> <b>Manufactured By:</b> STELLA INDUSTRIES LIMITED</p>
  <p>Old Khandsa Road, Sector -37, HSIIDC, Gurugram -122004, Haryana, India. M.L. No. M.123-Cos-(H). Permit No.
      L-42-A</p>
  <p> <b>Country of Origin -India</b> </p>
</div>
`;
};
