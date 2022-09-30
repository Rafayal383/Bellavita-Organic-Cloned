const navbar = () =>{
    return `
    <div id="nav_dis">
      <p>
        10% off for new users on first order with minimum order value of ₹499.
        Code : NEW10
      </p>
    </div>

    <div id="nav_item">
      <div class="nav_profile">
        <div class="nav_profile_icon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/456/456283.png"
            alt=""
          />
        </div>
      </div>
      <div class="nav_logo">
        <div class="nav_logo1">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683"
            alt=""
          />
        </div>
        <div class="nav_logo2">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
            alt=""
          />
        </div>
        <div class="nav_logo3">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721"
            alt=""
          />
        </div>
      </div>
      <div class="nav_search">
        <div class="nav_search_icon">
          <input type="text" placeholder="Search for products" />
          <div class="nav_search_logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3249/3249873.png"
              alt=""
            />
          </div>
        </div>
        <div class="nav_profile">
          <div class="nav_profile_icon1">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              alt=""
            />
          </div>
        </div>
        <div class="nav_profile">
          <div class="nav_profile_icon1">
            <img
              src="https://cdn-icons-png.flaticon.com/128/687/687259.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div id="nav_menu">
      <div>
        <div class="elements">
          <div>
            <p class="element-item">SHOP ALL</p>
          </div>
          <div>
            <p class="element-item">DIWALI GIVEAWAY</p>
          </div>
          <div>
            <p class="element-item">BESTSELLERS</p>
          </div>
          <div>
            <p class="element-item hovEff">SKIN CARE</p>
            <div class="dropdown skinDropdown">
              <div class="dropdownlist">
                <div class="innHead">BY PRODUCT TYPE</div>
                <div>
                  <a href="#">ALL SKINCARE PRODUCTS</a>
                  <a href="#">FACE CREAM</a>
                  <a href="#">FACE PACK/MASK</a>
                  <a href="#">FACE SERUM</a>
                  <a href="#">FACE SCRUB</a>
                  <a href="#">FACE TONER</a>
                  <a href="#">FACE GEL</a>
                  <a href="#">FACE MOISTURISERS</a>
                  <a href="#">SUNSCREEN WITH SPF</a>
                  <a href="#">LIP CARE</a>
                  <a href="#">NIGHT CARE</a>
                  <a href="#">UNDER EYE CARE</a>
                  <a href="#">EYE BROWS</a>
                  <a href="#">EXFOLIATORS</a>
                  <a href="#">FACE WASH</a>
                </div>
              </div>
              <div class="dropdownlist">
                <div class="innHead">BY CONCERN</div>
                <div>
                  <a href="#">PIGMENTATION</a>
                  <a href="#">ACNE & PIMPLES</a>
                  <a href="#">AGEING</a>
                  <a href="#">DARK SPOTS</a>
                  <a href="#">DARK CIRCLES</a>
                  <a href="#">BLACKHEADS & WHITE HEADS</a>

                  <a href="#">TAN REMOVAL</a>
                  <a href="#">HYDRATION</a>
                  <a href="#">SKIN BRIGHTENING</a>
                  <a href="#">PORE CARE</a>
                  <a href="#">SUN PROTECT</a>
                  <a href="#">OIL CONTROL</a>
                  <a href="#">PUFFINESS</a>
                </div>
              </div>
              <div class="dropdownlist skinimg">
                <div>
                  <div class="innHead">BY SKIN TYPE</div>
                  <div>
                    <a href="#">DULL SKIN</a>
                    <a href="#">DRY SKIN</a>
                    <a href="#">OILY SKIN</a>
                    <a href="#">NORMAL SKIN</a>
                  </div>
                </div>
                <div class="dropdownlist product_img">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Care_98c75ccd-6024-43d3-8c42-fb5b988084ce.png?v=1663914046"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="element-item hovEff">HAIR CARE</p>
            <div class="dropdown hairDropdown">
              <div class="dropdownlist">
                <div class="innHead">BY PRODUCT TYPE</div>
                <div>
                  <a href="#">ALL HAIRCARE PRODUCTS</a>
                  <a href="#">SHAMPOO</a>
                  <a href="#">CONDITIONER</a>
                  <a href="#">HAIR OIL</a>
                  <a href="#">HAIR MASK</a>
                </div>
              </div>
              <div class="dropdownlist">
                <div class="innHead">BY HAIR CONCERN</div>
                <div>
                  <a href="#">HAIR LOSS</a>
                  <a href="#">HAIR THINNING</a>
                  <a href="#">DULL HAIR</a>
                  <a href="#">DANDRUFF</a>
                  <a href="#">DAMAGE HAIR</a>
                  <a href="#">FRIZZY HAIR</a>
                  <a href="#">DRY HAIR & SCALP</a>
                </div>
              </div>
              <div class="dropdownlist product_img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_Medium_9f61e8b2-fbfd-4dde-b6f2-4c265b70be8a.jpg?v=1659103665"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p class="element-item hovEff">BODY CARE</p>
            <div class="dropdown bodyDropdown">
              <div class="dropdownlist">
                <div class="innHead">BATH & BODY</div>
                <div>
                  <a href="#">ALL BODY CARE PRODUCTS</a>
                  <a href="#">BODY SOAPS</a>
                  <a href="#">BODY WASH</a>
                  <a href="#">BODY SCRUB</a>
                  <a href="#">BODY LOTION</a>
                </div>
              </div>
              <div class="dropdownlist product_img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_Megamenu.png?v=1651666035"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p class="element-item hovEff">PERFUME</p>
            <div class="dropdown perfumeDropdown">
              <div class="dropdownlist">
                <div class="innHead">ALL PERFUMES</div>

                <div>
                  <a href="#">PERFUMES FOR HER</a>
                  <a href="#">PERFUMES FOR HIM</a>
                  <a href="#">UNISEX PERFUMES</a>
                  <a href="#">BODY PARFUM</a>
                  <a href="#">LITTLE LUXURIES</a>
                  <a href="#">GIFT SETS</a>
                </div>
              </div>
              <div class="dropdownlist product_img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Perfumes_Medium_c0c80af3-da25-4c9f-8e7f-c00c84f76a51.jpg?v=1659103815"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p class="element-item hovEff">COMBOS & GIFTS</p>
            <div class="dropdown comboDropdown">
              <div class="dropdownlist">
                <div class="innHead">COMBOS</div>

                <div>
                  <a href="#">GIFT BOXES</a>
                  <a href="#">ALL COMBOS</a>
                  <a href="#">BESTSELLER COMBOS</a>
                  <a href="#">SKIN COMBOS</a>
                  <a href="#">HAIR COMBOS</a>
                  <a href="#">BODY COMBOS</a>
                  <a href="#">PERFUME COMBOS</a>
                  <a href="#">C GLOW RANGE</a>
                  <a href="#">KUMKUMADI RANGE</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="element-item">BUILD A BOX</p>
          </div>
        </div>
      </div>
    </div>
    `
}

export default navbar ;