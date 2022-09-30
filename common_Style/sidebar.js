

let flag = false;
let click = document.querySelector(".skindropdown");

function ShowSkinCareOpt(){
    if(flag == false){
        click.classList.remove("display");
        flag=true
    }else{
        click.classList.add("display");
        flag=false
    }
}
document.querySelector(".skincarefn").addEventListener("click",ShowSkinCareOpt)


document.querySelector(".bodycarefn").addEventListener("click",ShowBodyCareOpt)
let bodyflag = false;
let bodyclick = document.querySelector(".bodydropdown");

function ShowBodyCareOpt(){
    if(bodyflag == false){
        bodyclick.classList.remove("display");
        bodyflag=true
    }else{
        bodyclick.classList.add("display");
        bodyflag=false
    }
} 


document.querySelector(".perfumefn").addEventListener("click",ShowPerfumeOpt)
let perfumeflag = false;
let perfume = document.querySelector(".pddown");
function ShowPerfumeOpt(){
    if(perfumeflag == false){
        perfume.classList.remove("display");
        perfumeflag=true
    }else{
        perfume.classList.add("display");
        perfumeflag=false
    }
}

document.querySelector(".combofn").addEventListener("click",showcomboopt)
let comboflag = false;
let combo = document.querySelector(".comboddn");
function showcomboopt(){
    if(comboflag == false){
        combo.classList.remove("display");
        comboflag=true
    }else{
        combo.classList.add("display");
        comboflag=false
    }
}

