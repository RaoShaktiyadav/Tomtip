document.querySelector("form").addEventListener("submit", function () {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var number = document.getElementById("acNo").value;
    var date = document.getElementById("dt").value;
    var cvv = document.getElementById("cvv").value;
    if (name != "" && number != "" && date != "" && cvv != "") {
        alert("Order SucessFull");
        localStorage.removeItem("CartItems");
        localStorage.removeItem("total");
        window.location.href = "index.html";
    }
    if (name == "" || number == "" || date == "" || cvv == "") {
        alert("Fill all the boxes");
    }
});
