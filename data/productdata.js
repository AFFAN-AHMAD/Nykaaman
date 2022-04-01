let data = [
    {
        img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/f/1f7faa342289197_1.jpg',
        name: 'Free Nivea Men Dark Spot Reduction Creme',
        size: '30ml',
        price:100
    },
    {
        img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/f/cfm-hydrator-7ml.jpg',
        name: 'Free Clinique for Men 72H Maximum Hydrator (Size - 7ml)',
        size: '30ml',
        price:100

    },
    {
        img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/6/76a092520714744762_1.jpg',
        name: 'Clinique For Men Charcoal Face Wash',
        size: '30ml',
        price:10000

    },
    {
        img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/1/a1addbanykisp0000012newa_1.jpg',
        name: 'Isopure Low Carb 100% Whey Protein Isolate Powder - 7.5 lbs (Creamy Vanilla)',
        size: '30ml',
        price:1000

    },
    {
        img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/6/369edba89094024918newa_1.jpg',
        name: 'Isopure Low Carb 100% Whey Protein Isolate Powder Dutch Chocolate - 1Lbs',
        size: '30ml',
        price:1000

    },

]


localStorage.setItem("productsData", JSON.stringify(data))


function removeitem(data)
{   
    console.log(data);
    console.log(cart)
     cart =  cart.filter(function(el){
            return  el.idMeal!==data.idMeal
    })
    console.log(cart);
      localStorage.setItem("cart",JSON.stringify(cart));
       display(cart);
       showTotal(cart);
   
}