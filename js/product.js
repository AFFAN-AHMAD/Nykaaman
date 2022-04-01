
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
      window.location.href ="../html/product.html"
    
    }