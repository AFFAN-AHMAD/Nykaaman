const saveData = () => {
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  let pin = document.getElementById("pin").value;

  let address = document.getElementById("locality").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (name == "" || email == "" || phone == "" || pin == "" || address == "") {
    alert("Fields Cannot Be Empty");
  }
  // if(address.length<=5){
  //   alert("Address Should Have At Least 5 Characters")
  // }
  else {
    localStorage.setItem("users", JSON.stringify(user_records));
    window.location.href = "payment.html";
  }

  user_records.push({
    name: name,
    email: email,
    phone: phone,
    pin: pin,
    address: address,
  });
};
