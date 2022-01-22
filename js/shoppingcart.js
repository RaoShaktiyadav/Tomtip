var cart = JSON.parse(localStorage.getItem("CartItems")) || []
console.log(cart)

cart.map(display);



function display(elem, index) {
    var card = document.createElement("div");
    console.log(card);
    card.setAttribute("id", "card");



    var i = document.createElement("img");
    i.setAttribute("src", elem.image);


    var name = document.createElement("p");
    name.innerText = elem.name;

    var cost = document.createElement("div");
    cost.style.display = "flex";
    cost.style.justifyContent = "space-around";

    var price = document.createElement("h3");
    price.innerText = elem.price;

    var sop = document.createElement("p");
    sop.innerText = elem.strikeoff;
    sop.style.textDecoration = "line-through"
    cost.append(price, sop);

    var removebtn = document.createElement("button");
    removebtn.textContent = "remove";
    removebtn.addEventListener("click", function () {
        removeitems(index);

    })

    var div = document.createElement("div");
    div.append(name, cost, removebtn)

    card.append(i, div);

    var cont = document.querySelector(".product-container");
    cont.append(card);
    localStorage.setItem("CartItems", JSON.stringify(cart))

}

var total = cart.reduce(function (acc, cv) {
    return (Number(acc + cv.price));
}, 0)

document.querySelector("h1").textContent = `Total amount of cart is US$ ${total}`

function removeitems(index) {
    cart.splice(index, 1);
    localStorage.setItem("CartItems", JSON.stringify(cart));
    document.querySelector(".product-container").innerHTML = "";
    cart.map(display);
    document.querySelector("h1").textContent = ``;
    var total = cart.reduce(function (acc, cv) {
        return (Number(acc + cv.price));
    }, 0)
    document.querySelector("h1").textContent = `Total amount of cart is US$ ${total} `

}

if (total > 1) {
    var proceedbtn = document.createElement("button");
    proceedbtn.textContent = "Proceed to check out";
    proceedbtn.addEventListener("click", function () {
        window.location.href = "checkout.html"
    })
    document.querySelector(".cart_box_right").append(proceedbtn);
}