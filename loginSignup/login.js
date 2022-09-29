
let data = JSON.parse(localStorage.getItem("user"));
function login(){
    event.preventDefault();
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value

    let flag = false;
   data.forEach(function(el){

          if(email===el.email && password===el.password){

                flag = true;

          }else{
            flag = false;
          }


   });

   if(flag===true){

        alert("Login successful");
        window.location = "" /*redirect to landing page*/
   }else{

     alert("error");

   }
}