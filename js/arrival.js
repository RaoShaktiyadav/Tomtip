//   var id = 1234;
//     var data = [{image :"https://img.tttcdn.com/product/brand/2019/2/11/qpLeD31431755671.jpg"
//            },{image : "https://img.tttcdn.com/product/brand/2019/2/11/FgnmpU-1635887911.jpg"},
//     {image : "https://img.tttcdn.com/product/brand/2019/2/11/ehakyR-1573857885.jpg"
//     },{image : "https://img.tttcdn.com/product/brand/2019/2/11/Gm0toG548617673.jpg"
//     },
//     {image: "https://img.tttcdn.com/product/brand/2019/2/11/pVrzsu-428949353.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2020/5/30/prP3Ss-290551226.png"},
//     {image: "https://img.tttcdn.com/product/brand/2019/2/11/Epa2dc-932118670.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2019/2/11/Xgjz5U621553700.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2019/2/11/b5BWB71481211.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2019/9/19/v7G4af46728356.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2019/2/11/x1fyZm-717839356.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2019/2/11/8GvrgO799602975.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2020/5/30/SVhmcT-1529418360.png"},
//     {image: "https://img.tttcdn.com/product/brand/2020/5/30/ZFQpD51450097802.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2019/8/14/9hmuMW-328746202.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2020/4/14/zq6lJW1447285781.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2020/6/3/X0MPuW1068267905.jpg"},
//     {image: "https://img.tttcdn.com/product/brand/2020/5/30/qcg617-1761364007.jpg"},
//     {image:"https://img.tttcdn.com/product/brand/2020/6/4/RSBiO6419849762.png"}]

//     data.map(function (elem){
//     var card = document.createElement("div");
//     card.style.width = "80px";
//     card.style.height = "50px"
//     card.style.margin = "10px";

//     var i = document.createElement("img");
//     i.setAttribute("src",elem.image);

//     card.append(i);

//     var cont = document.querySelector(".brands");
//     cont.style.display ="flex";
//     cont.append(card);

// })

var productdata = [
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/H/0/H44874BL-200/H44874BL-200-1-93a2-04DC.jpg",
        name: "200pcs Artificial Fluorite Garden Pebbles",
        price: 54.00,
        strikeoff: "$90.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/E/1/E20647EU-1/E20647EU-1-1-e3c5-RX7s.jpg",
        name: "16.8V Professional Cordless Electric Pruning Shears with Carry Case Rechargeable 2Ah",
        price: 105.00,
        strikeoff: "$165.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/K/9/K19679/K19679-1-1044-6ZAU.jpg",
        name: "5 inch TFT-LCD Backup Camera Car Rear View Backup Reverse System + HD Parking Camera",
        price: 35.00,
        strikeoff: "$100.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/P/L/PAA4620BL/PAA4620BL-1-3f4f-EEZ8.jpg",
        name: "New Original Xiaomi Mi Pad 5 / 5 Pro Magic TouchPad Keyboard Cases",
        price: 99.00,
        strikeoff: "$210.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/S/1/S6371/S6371-1-6e20-u4sG.jpg",
        name: "4MP Wireless Solar Panel Security Camera Outdoor Waterproof Surveillance Camera",
        price: 158.00,
        strikeoff: "$263.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/R/1/RM14028-1/RM14028-1-1-3a11-QTjR.jpg",
        name: "2.4GHz 6CH RC Car RC Boat Remote Controller",
        price: 53.00,
        strikeoff: "$93.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/E/4/E20834/E20834-1-b437-wzqL.jpg",
        name: "KKmoon KKM198 4.4 Inch Color Touching Screen Intelligent Digital Multimeter TRMS",
        price: 25.00,
        strikeoff: "$38.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/D/2/D11442/D11442-1-a108-Ctzx.jpg",
        name: "Smarphone vlog kit",
        price: 27.00,
        strikeoff: "$45.00",
    },
    {
        image:
            "https://img.tttcdn.com/product/xy/377/377/p/gu1/K/5/K19525/K19525-1-4150-UXlW.jpg",
        name: "3.75 inch Car Universal Black Tachometer Gauge Blue Inter Shift light 0-8000 RPM",
        price: 27.00,
        strikeoff: "$30.00",
    },
];

localStorage.setItem("productData", JSON.stringify(productdata));

productdata.map(function (elem, index) {
    var card = document.createElement("div");
    card.style.width = "90%";
    card.addEventListener("click", function (elem, index) {
        card.setAttribute("href", (window.location.href = "productdetails.html"));
        productdetails.push(elem);
    });

    // var productdetails = []
    // localStorage.setItem("productDetails", JSON.stringify(productdetails));

    var i = document.createElement("img");
    i.setAttribute("src", elem.image);

    var name = document.createElement("p");
    name.innerText = elem.name;

    var cost = document.createElement("div");
    cost.style.display = "flex";
    cost.style.justifyContent = "space-around";

    var price = document.createElement("h3");
    price.innerText = "US$" + elem.price;

    var sop = document.createElement("p");
    sop.innerText = elem.strikeoff;
    sop.style.textDecoration = "line-through";
    cost.append(price, sop);
    var button = document.createElement("button");
    button.textContent = "Add to cart";
    button.addEventListener("click", function () {
        addtoCart(elem);
    });
    card.append(i, name, cost,);
    card.style.margin = "5%"

    var div = document.createElement("div");
    div.append(card, button);
    button.style.margin = "5%"

    var cont = document.querySelector(".product-container");
    cont.append(div);
});

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