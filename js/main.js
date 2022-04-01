

let sliderList = document.querySelector("#sf-Slider");
let items = sliderList.querySelectorAll(".sf-SliderBox");
let count = 1;

document.getElementById("leftButton").addEventListener("click", () => {
  prevSlide();
});

document.getElementById("rightButton").addEventListener("click", () => {
  nextSlide();
});

function prevSlide() {
  if (count > 1) {
    count = count - 2;
    sliderList.style.left = "-" + count * 1600 + "px";
    count++;
  }
}

function nextSlide() {
  if (count < 6) {
    sliderList.style.left = "-" + count * 1560 + "px";
    count++;
  }
}

setInterval(function () {
  if (count == 6) {
    count = 0;
    document.getElementById("aaja1").style.left = 0;
    prevSlide();
  } else {
    nextSlide();
  }
}, 2000);

// one slider end
// 2nd slider start

let sliderList1 = document.querySelector("#sf-Slider1");
let items1 = sliderList1.querySelectorAll(".sf-SliderBox1");
let count1 = 1;

document.getElementById("leftButton1").addEventListener("click", () => {
  prevSlide1();
});

document.getElementById("rightButton1").addEventListener("click", () => {
  nextSlide1();
});

function prevSlide1() {
  if (count1 > 1) {
    count1 = count1 - 2;
    sliderList1.style.left = "-" + count1 * 220 + "px";
    count1++;
  }
}

function nextSlide1() {
  if (count1 < 3) {
    sliderList1.style.left = "-" + count1 * 210 + "px";
    count1++;
  }
}


setInterval(function () {
    if (count1 == 3) {
      count1 = 0;
      document.getElementById("aaja1").style.left = "0px";
      prevSlide1();
    } else {
      nextSlide1();
    }
  }, 2000);

  // slider 3 started...
      let sliderList3 = document.querySelector("#sf3-Slider");
      let items3 = sliderList3.querySelectorAll(".sf3-SliderBox");
      let count3 = 1;

      document.getElementById("sf3-leftButton").addEventListener("click", () => {
        SF3prevSlide();
      });

      document.getElementById("sf3-rightButton").addEventListener("click", () => {
        SF3nextSlide();
      });

      function SF3prevSlide() {
        if (count3 > 1) {
          count3 = count3 - 2;
          sliderList3.style.left = "-" + count3 * 220 + "px";
          count3++;
        }
      }

      function SF3nextSlide() {
        if (count3 < 3) {
          sliderList3.style.left = "-" + count3 * 210 + "px";
          count3++;
        }
      }
      setInterval(function () {
      if (count3 == 2) {
        count3 = 0;
        document.getElementById("aaja3").style.left = 0;
        SF3prevSlide();
      } else {
        SF3nextSlide();
      }
    }, 2000);

    // slider 4 start

    let sliderList4 = document.querySelector("#sf4-Slider");
let items4 = sliderList4.querySelectorAll(".sf4-SliderBox");
let count4 = 1;

document.getElementById("sf4-leftButton").addEventListener("click", () => {
  SF4prevSlide();
});

document.getElementById("sf4-rightButton").addEventListener("click", () => {
  SF4nextSlide();
});

function SF4prevSlide() {
  if (count4 > 1) {
    count4 = count4 - 2;
    sliderList4.style.left = "-" + count4 * 220 + "px";
    count4++;
  }
}

function SF4nextSlide() {
  if (count4 < 3) {
    sliderList4.style.left = "-" + count4 * 210 + "px";
    count4++;
  }
}

setInterval(function () {
    if (count4 == 2) {
      count4 = 0;
      document.getElementById("aaja4").style.left = "0px";
      SF4prevSlide();
    } else {
      SF4nextSlide();
    }
  }, 2000);

  var scrollBtn = document.querySelector("#scrollTop");
  scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

   //product sort by CATEGORY

   function detaSort(event){
  
    let pdatabase = JSON.parse(localStorage.getItem("Nykaman")) || []
    console.log("pdatabase",pdatabase)
      localStorage.removeItem("Nykaman")
      // console.log(event)
    
      sort = pdatabase.filter(function(el){
        return el.cat.includes(event)
      })
      // console.log("dataaaaa",sort)
      localStorage.setItem("Nykaman",JSON.stringify(sort))
      window.location.href ="./html/product.html"
    
    }