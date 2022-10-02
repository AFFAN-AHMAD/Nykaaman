document.querySelector("#otpform").addEventListener("submit", submitOtp);
// var OTP = "1234";
function submitOtp(event) {
  event.preventDefault();
  var input_otp1 = Number(document.querySelector("#otp1").value);
  var input_otp2 = Number(document.querySelector("#otp2").value);
  var input_otp3 = Number(document.querySelector("#otp3").value);
  var input_otp4 = Number(document.querySelector("#otp4").value);
  // console.log(typeof input_otp1 ,"1111")
  if (
    typeof input_otp1 == "number" &&
    typeof input_otp2 == "number" &&
    typeof input_otp3 == "number" &&
    typeof input_otp4 == "number"
  ) {
    alert("Payment Successful");
    window.location.href = "success.html";
  } else {
    alert("Error");
  }
}

document.getElementById("num_resend").addEventListener("click", function () {
  alert("OTP Resend Successful");
  window.location.href = "otp.html";
});
