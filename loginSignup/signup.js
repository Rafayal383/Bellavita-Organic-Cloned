let data = JSON.parse(localStorage.getItem("user")) || [];
function signUp() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  if (!firstname || !lastname || !email || !password) {
    alert("Please give correct inputs");
    return;
  }

  let obj = {
    firstname,
    lastname,
    email,
    password,
  };

  data.push(obj);
  console.log(obj);

  localStorage.setItem("user", JSON.stringify(data));
  alert("sign up sucessfull");
  window.location = "../landingPage/landing.html";
  
}
