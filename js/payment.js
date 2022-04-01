document.querySelector(".paymentmake").addEventListener("click", pay);
var carddetails = JSON.parse(localStorage.getItem("carddetails"));

function pay() {
  var card_num = document.querySelector("#cardnum").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var cvv = document.querySelector("#cvv").value;
  if (
    card_num == carddetails[0].cardnum &&
    month == carddetails[0].month &&
    year == carddetails[0].year &&
    cvv == carddetails[0].cvv
  ) {
    window.location.href = "OTP.html";
  } else {
    alert("Error");
  }
}


var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
    var countarr = JSON.parse(localStorage.getItem("count")) || [];

    var total = cartdata.reduce(function (acc, data) {
      return acc + data.price * data.quantity;
    }, 0);

    function showtotal() {
      var total = cartdata.reduce(function (acc, data) {
        return acc + data.price * data.quantity;
      }, 0);
      document.querySelector("#total").innerText = "₹" + total;
      var taxtotal = total + (18 / 100) * total;
      document.querySelector("#ordertotal").innerText = "₹" + taxtotal;

      if (countarr.length != 0) {
        var promototal = total - (30 / 100) * total;
        document.querySelector("#ordertotal").innerText =
          "₹" + Math.floor(promototal);
        document.querySelector("#discount").innerText = "-30%";
      }
    }

    function items_no() {
      var itemsno = cartdata.length;
      document.querySelector("#item_no").innerText = itemsno;
    }

    showtotal();
    items_no();