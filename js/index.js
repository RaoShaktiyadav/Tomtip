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

  mobileHome.addEventListener("click", function(){
    window.location.href= "index.html";
  })

  var boxonedata = [
    {
      name: "Flash Sale",
      image: "https://img.tttcdn.com/home/page/2021/12/30/f72G2U46734060.png",
    },
    {
      name: "Extra 50% Off Coupon",
      image: "https://img.tttcdn.com/home/page/2021/12/30/JpWty5-714956459.png",
    },

    {
      name: "Get Free Gift",
      image: "https://img.tttcdn.com/home/page/2021/12/30/vDIKeM1121392672.png",
    },
    {
      name: "New Arrivals",
      image: "https://img.tttcdn.com/home/page/2021/12/30/LH98XG1967782958.png",
    },
    {
      name: "New Buyers Only",
      image: "https://img.tttcdn.com/home/page/2021/12/30/HNpfEm1068098003.png",
    },
  ];
  var mobileboxonedata = [
    {
      name: "Newest",
      image: "https://img.tttcdn.com/home/page/2019/7/8/LjYZRB-1184801951.jpg",
    },
    {
      name: "New Buyer",
      image: "https://img.tttcdn.com/home/page/2019/7/8/e3vRBt-647688691.jpg",
    },

    {
      name: "Coupon",
      image: "https://img.tttcdn.com/home/page/2019/7/8/Hobv0k338981114.jpg",
    },
    {
      name: "Hot",
      image: "https://img.tttcdn.com/home/page/2019/7/8/UnIy102088172219.jpg",
    },
    {
      name: "Free Gift",
      image: "https://img.tttcdn.com/home/page/2019/7/8/Xjs7PZ1378446515.jpg",
    },
    {
      name: "Brands",
      image: "https://img.tttcdn.com/home/page/2019/7/8/xnBv4L-1903629150.jpg",
    },
    {
      name: "Social Saving",
      image: "https://img.tttcdn.com/home/page/2019/7/8/faCiJB-751159428.jpg",
    },
    {
      name: "Splash Price",
      image: "https://img.tttcdn.com/home/page/2019/7/8/zaBdxj476000736.jpg",
    },
  ];

  var flashdeal = [
    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/O/0/OS4450/OS4450-1-d47c-OPrX.jpg",
      name: "Portable Scan Translation Pen Exam Reader Voice Language Translator Device with Touchscreen",
      sold: "211/282",
      price: 89.99,
      strikeoff: "US$289.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/U/PAA1950GR-AU/PAA1950GR-AU-1-10a5-rfpx.jpg",
      name: "Liven G-5 Oil-free Air Fryer  2.5L No Oil Fryer Machine",
      sold: "318/477",
      price: 139.99,
      strikeoff: "US$399.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/R/U/RTEYU-E9-EU/RTEYU-E9-EU-1-45bf-5xx7.jpg",
      name: "E9 8 Inch Height Adjustable Folding Electric Scooter",
      sold: "148/240",
      price: 111.72,
      strikeoff: "US$269.53",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/A/3/A009-3/A009-3-1-b2e7-PkE2.jpg",
      name: "Tooarts Metal Sculpture Playing Saxophone Cat Home Furnishing Articles Handicrafts",
      sold: "582/927",
      price: 16.49,
      strikeoff: "US$66.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/4/PA3154/PA3154-1-42b7-wHVe.jpg",
      name: "ADO mate3 Premium Mini Wireless Stereo BT Speaker Box 1800mAh Battery NFC Function",
      sold: "556/892",
      price: 13.59,
      strikeoff: "US$24.75",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/C/C1783/C1783-3-6bc4.jpg",
      name: "Rii mini X1 Handheld 2.4G Wireless Air Mouse Touchpad gaming keyboard for Phone Android TV Box PC Notebook",
      sold: "142/219 ",
      price: 17.99,
      strikeoff: "US$26.88",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/C/C1299EU/C1299EU-3-c19e.jpg",
      name: "Wireless-N Wifi Repeater",
      sold: "142/219 ",
      price: 13.99,
      strikeoff: "US$25.79",
    },
    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/D/0/D3510/D3510-1-487d-N7Mo.jpg",
      name: "Godox X1R-N TTL 2.4G Wireless Flash Trigger Receiver for Nikon DSLR Camera for X1N Trigger",
      sold: "128/322",
      price: 38.99,
      strikeoff: "US$74.56",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/H/9/H16839/H16839-1-614e-QNRi.jpg",
      name: "iKayaa Industrial Style Adjustable Height Swivel Kitchen Dining Breakfast Chair Natural Pinewood Top Bar Stool",
      sold: "57/158",
      price: 47.99,
      strikeoff: "US$115.59",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/D/D3099/D3099-8-f214.jpg",
      name: "GODOX X1R-C 32 Channels TTL 1/8000s Wireless Remote Flash Receiver Shutter Release for Canon EOS Cameras GODOX X1T-C Transmitter",
      sold: "133/322 ",
      price: 38.99,
      strikeoff: "US$76.71",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/D/D1253/D1253-8-e991.jpg",
      name: "2 * 3m / 6.6 * 9.8ft Adjustable Background Support Stand Photo Backdrop Crossbar Kit with two Clamps",
      sold: "200/300",
      price: 93.99,
      strikeoff: "US$129.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/U/PAA4054W-AU/PAA4054W-AU-1-2336-ehrI.jpg",
      name: "Smartmi Electronic Bidet Toilet Seat Automatic Smart Toilet Seat Lid Cover Upgrade Version",
      sold: "138/210",
      price: 349.99,
      strikeoff: "US$914.69",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/7/E5705-7/E5705-7-1-0d47-0DTc.jpg",
      name: "1000Pcs 5mm Magnetic Ball Set Magic Magnet Cube Building Toy for Stress Relief Mix 10-Color",
      sold: "289/667",
      price: 42.99,
      strikeoff: "US$61.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/C/8/C-MD658/C-MD658-1-7050-88Kd.jpg",
      name: "UX-A-02 Non Contact IR Infrared Thermometer + Fast Rapid Reading Finger Pulse Oximeter",
      sold: "704/2700",
      price: 12.99,
      strikeoff: "US$49.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/S/N/S786B-N/S786B-N-1-e37b-Q0Ys.jpg",
      name: "KKmoon HD 1200TVL Surveillance Camera Security CCTV Indoor Night Vision 1/3” CMOS IR-CUT Pal System",
      sold: "122/322",
      price: 16.99,
      strikeoff: "US$39.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/U/PA3155EU/PA3155EU-1-a590-9TGh.jpg",
      name: "25W / 5.4A 4 Ports Universal USB Power Adapter with Intelligent Current Recognition for Travel Mobile Cell Phones Tablet PC Smart Fast Charger",
      sold: "918/1476",
      price: 14.79,
      strikeoff: "US$29.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/A/2/A012/A012-1-29ca-mbyi.jpg",
      name: "Tooarts Metal sculpture Carved iron rooster Home furnishing articles Artwork",
      sold: "340/540",
      price: 42.99,
      strikeoff: "US$79.99",
    },

    {
      image:
        "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/7/E1187/E1187-1-c9ae-MF2y.jpg",
      name: "Electric Grinder Locator for Dremel Professional Drill Grindering & Polishing Positioner Retainer Rotary Tool Accessory",
      sold: "210/329",
      price: 5.49,
      strikeoff: "US$7.81",
    },
  ];

   var signin = document.querySelector("#signin");
   signin.addEventListener("click", function(){
     window.location.href = "signin.html"
   })

  boxonedata.map(function (elem) {
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    var text = document.createElement("h6");
    text.textContent = elem.name;

    div.append(image, text);
    document.querySelector(".boxtwo").append(div);
  });

  mobileboxonedata.map(function (elem) {
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    var text = document.createElement("p");
    text.textContent = elem.name;

    div.append(image, text);
    document.querySelector("#mobboxone").append(div);
  });

  var cartArray = JSON.parse(localStorage.getItem("CartItems")) || [];

  flashdeal.map(function (elem, index) {
    var bigdiv = document.createElement("div");
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    var text = document.createElement("h5");
    text.textContent = elem.name;
    var div2 = document.createElement("div");

    var price = document.createElement("h6");
    price.textContent = "US$"+elem.price;

    var strikeoff = document.createElement("p");
    strikeoff.textContent = elem.strikeoff;

    var addtocart = document.createElement("button");
    addtocart.textContent = "Add To Card";
    addtocart.addEventListener("click", function () {
      addtoCart(elem);
    });

    div2.append(price, strikeoff);
    bigdiv.append(image, text, div2);

    div.append(bigdiv, addtocart);
    bigdiv.addEventListener("click", function () {
      detailspage(elem);
      window.location.href = "productdetails.html";
    });
    document.querySelector(".boxthree").append(div);
  });

  function addtoCart(elem) {
    console.log(elem);
    cartArray.push(elem);
    localStorage.setItem("CartItems", JSON.stringify(cartArray));
    alert("Added Succesfully!");
  }

  function detailspage(elem) {
    console.log(elem);
    var productdetails = [];
    productdetails.push(elem);
    localStorage.setItem("productpage", JSON.stringify(productdetails));
  }

  var cartpage = document.querySelector("#indexcart");
  cartpage.addEventListener("click", function(){
    window.location.href = "shoppingcart.html"
  })

  var home = document.querySelector("#home");
  home.addEventListener("click", function(){
    window.location.href="index.html";
  })