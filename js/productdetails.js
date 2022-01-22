var productdetails = JSON.parse(localStorage.getItem("productpage"));
console.log(productdetails)

productdetails.map(function (elem) {
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);

    document.querySelector("#image-div").append(image);

    document.querySelector("#dataname").textContent = elem.name;
    document.querySelector("#dataprice").textContent = elem.price;
    document.querySelector("#addtocart").addEventListener("click", function () {
        addtoCart(elem);
    });
});
var cartArray = JSON.parse(localStorage.getItem("CartItems")) || [];

function addtoCart(elem) {
    console.log(elem);
    cartArray.push(elem);
    localStorage.setItem("CartItems", JSON.stringify(cartArray));
    alert("Added Succesfully!");
}

var mobileNavBtn = document.querySelector(".mobile-menu");
var mobileNav = document.querySelector(".mobile-nav-menu");
var mobileNavExit = document.querySelector(".mobile-close-button");
var mobileHome = document.querySelector(".mobile-home-button");

mobileNavBtn.addEventListener("click", () => {
    mobileNav.classList.add("show-menu");
});
mobileNavExit.addEventListener("click", () => {
    mobileNav.classList.remove("show-menu");
});
mobileHome.addEventListener("click", function () {
    window.location.href = "index.html";
})