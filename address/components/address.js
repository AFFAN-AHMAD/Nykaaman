
const saveData = () => {
  

  // let country = document.getElementById("country").value;

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  let pin = document.getElementById("pin").value;

  let address = document.getElementById("locality").value;

  

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  
    // let messages = []

    // if (name.value === '' || name.value == null) {
    //       messages.push('Name is required')
    //     }

    // if (email.value === '' || email.value == null) {
    //           messages.push('Email is required')
    //         }    

    // if (phone.value === '' || phone.value == null) {
    //   messages.push('Mobile Number is required')
    // }      
    
    // if (messages.length > 0) {
      //     e.preventDefault()
      //     errorElement.innerText = messages.join(', ')
      //   }

    user_records.push({
      name: name,
      email: email,
      phone: phone,
      pin: pin,
      address: address,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  
      window.location.href = "payment.html";
};

// document.getElementsByClassName("logo").addEventListener("onclick", click(){
//   window.location.href = "index.html";
// })
