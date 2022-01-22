var homeall = document.querySelector("#home");
homeall.addEventListener("click", function () {
  window.location.href = "index.html";
});

var cartpagebtn = document.querySelector("#indexcart");
cartpagebtn.addEventListener("click", function () {
  window.location.href = "shoppingcart.html"
});

var signinbtn = document.querySelector("#signin");
signinbtn.addEventListener("click", function () {
  window.location.href = "signin.html"
});
