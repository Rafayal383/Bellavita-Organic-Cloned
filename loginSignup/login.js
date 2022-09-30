
let data = JSON.parse(localStorage.getItem("user"));
function login(){
    event.preventDefault();
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value

    let flag = false;
   data.foreach(function(el){

          if(email===el.email && password===el.password){

                flag = true;

          }else{
            flag = false;
          }


   });

   if(flag===true){

        alert("Login successful");
        window.location = "index.html"
   }else{

     alert("error");

   }
}