document.querySelector(".paymentmake").addEventListener("click", pay);
// var carddetails = JSON.parse(localStorage.getItem("carddetails"));

function pay() {
  var card_num = document.querySelector("#cardnum").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var cvv = document.querySelector("#cvv").value;
  // let currentdate =  Date.now();
  console.log()
  if(card_num.length < 16){
    alert("Please Enter 16 Digit Card Number")
    return
  }
  if(month.length<2){
    alert("Please Enter 2 Digit Month")
    return
  }
  if(year<22){
    alert("Please Enter valid Year ")
    return
  }
  if(month>12){
    alert("Please Enter valid Month")
    return
  }
  if(cvv.length<3){
    alert("Please Enter 3 Digit cvv")
    return
  }
  alert("OTP Sent To Registerd Mobile Number")
  location.replace("OTP.html");
}


// if (
//   card_num == carddetails[0].cardnum &&
//   month == carddetails[0].month &&
//   year == carddetails[0].year &&
//   cvv == carddetails[0].cvv
// ) {
//   alert("OTP Sent To Registerd Mobile Number")
//   location.replace("OTP.html");
// } else {
//   alert("Invalid Card Details !");
// }

// var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
//     var countarr = JSON.parse(localStorage.getItem("count")) || [];

//     var total = cartdata.reduce(function (acc, data) {
//       return acc + data.price * data.quantity;
//     }, 0);

//     function showtotal() {
//       var total = cartdata.reduce(function (acc, data) {
//         return acc + data.price * data.quantity;
//       }, 0);
//       document.querySelector("#total").innerText = "₹" + total;
//       var taxtotal = total + (18 / 100) * total;
//       document.querySelector("#ordertotal").innerText = "₹" + taxtotal;

//       if (countarr.length != 0) {
//         var promototal = total - (30 / 100) * total;
//         document.querySelector("#ordertotal").innerText =
//           "₹" + Math.floor(promototal);
//         document.querySelector("#discount").innerText = "-30%";
//       }
//     }

//     function items_no() {
//       var itemsno = cartdata.length;
//       document.querySelector("#item_no").innerText = itemsno;
//     }

//     showtotal();
//     items_no();