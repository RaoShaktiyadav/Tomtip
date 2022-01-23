var cart = JSON.parse(localStorage.getItem("CartItems")) || []
console.log(cart);
cart.map(display);

function display(elem, index) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = index+1;

    var td2 = document.createElement("td");
    td2.textContent = elem.name;

    var td3 = document.createElement("td");
    td3.textContent = "US$" + elem.price;

    tr.append(td1, td2, td3);

    document.querySelector("tbody").append(tr)
}

var total = JSON.parse(localStorage.getItem("total"))

document.querySelector("span").textContent = "US$" + total;

document.querySelector("form").addEventListener("submit", deliverydata);
var arr = JSON.parse(localStorage.getItem("deliverydata")) || [];

function deliverydata(event) {
    event.preventDefault();
    var names = document.querySelector(".names").value;
    var number = document.querySelector(".mobile").value;
    var address = document.querySelector("textarea").value;

    var payment = document.querySelector("select").value;

    var data = {
        name: names,
        number: number,
        address: address,
        payment: payment
    };
    arr.push(data);

    if (arr.length < 1) {
        alert("Enter details")
    }

    if (names == "" || number == "" || address == "") {
        alert("Fill all the boxes");
    }

    localStorage.setItem("deliverydata", JSON.stringify(arr))
}

document.querySelector("#code").addEventListener("click", function () {
    var promoCode = document.querySelector("#promo").value

    if (promoCode == "masai30") {
        alert("Coupon Applied successfully")
        var finalPrice = total - (total * (30 / 100))
        document.querySelector("span").textContent = "US$" + finalPrice;
    }
    if (promoCode != "masai30") {
        alert("Coupon not available")
    }
})

document.querySelector(".right > button").addEventListener("click", function () {
    window.location.href = "payment.html"
})