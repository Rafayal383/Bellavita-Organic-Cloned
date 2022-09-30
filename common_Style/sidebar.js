





const sidebar = ()=>{
    return `
        <div class="refine">
          <div class="refineIMGdiv">
            <img
              src="https://t3.ftcdn.net/jpg/03/20/78/84/240_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg"
              alt=""
            />
          </div>
          <p>REFINE BY</p>
        </div>
        <p class="cat">CATEGORIES</p>
        <hr />
        <div class="sidemenu">
          <a href="#">Shop All</a>
        </div>
        <div class="sidemenu">
          <a href="#">Diwali Giveaway</a>
        </div>
        <div class="sidemenu">
          <a href="#">Bestsellers</a>
        </div>

        <div class="sidemenu  skincarefn" >
          <a href="#">Skin Care</a>
          <p>⮟</p>
        </div>
        <div class="skindropdown display">
          <a href="#">FACE CREAM</a>
          <a href="#">FACE PACK/MASK</a>
          <a href="#">FACE SERUM</a>
          <a href="#">FACE SCRUB</a>
          <a href="#">FACE TONER</a>
          <a href="#">FACE GEL</a>
          <a href="#">FACE MOISTURISERS</a>
        </div>

        <div class="sidemenu bodycarefn">
          <a href="#">Body Care</a>
          <p>⮟</p>
        </div>
        <div class="bodydropdown display ">
          <a href="#">ALL BODY CARE PRODUCTS</a>
          <a href="#">BODY SOAPS</a>
          <a href="#">BODY WASH</a>
          <a href="#">BODY SCRUB</a>
          <a href="#">BODY LOTION</a>
        </div>




        <div class="sidemenu perfumefn">
          <a href="#">Perfumes</a>
          <p>⮟</p>
        </div>
        <div class="pddown display ">
            <a href="#">ALL PERFUMES</a>
            <a href="#">PERFUMES FOR HER</a>
            <a href="#">PERFUMES FOR HIM</a>
            <a href="#">UNISEX PERFUMES</a>
            <a href="#">BODY PARFUM</a>
            <a href="#">LITTLE LUXURIES</a>
            <a href="#">GIFT SETS</a>
        </div>


        <div class="sidemenu combofn">
          <a href="#">Combos & Gifts</a>
          <p>⮟</p>
        </div>
        <div class="comboddn display ">
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


        <div class="sidemenu">
          <a href="#">Build a Box</a>
        </div>
    `
}

document.getElementById("sidebar").innerHTML=sidebar();


