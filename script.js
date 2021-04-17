function incrementItem(n,substring) {
    var qty = "quatity".concat(substring);
    console.log(qty)
    var quantity = document.getElementById(qty).value;
    quantity = +quantity + n;
    document.getElementById(qty).value = quantity;
    console.log(quantity);
    var price = "price".concat(substring)
    var itemPrice = document.getElementById(price).innerText;
    console.log(itemPrice);
    var itemsTotPrice = +itemPrice * +quantity;
    console.log(itemsTotPrice);
    var TotPriceOfItem = "total".concat(substring);
    document.getElementById(TotPriceOfItem).innerText = itemsTotPrice;
    var theTotal = document.getElementById('TheTotal').innerText;
    
}

function Totals(){
    var item1 = document.getElementById('total-1').innerHTML;
    console.log(item1)
    var item2 = document.getElementById('total-2').innerHTML;
    var item3 = document.getElementById('total-3').innerHTML;
    var Tot = +item1 + +item2 + +item3;


    document.getElementById('TheTotal').innerHTML = Tot
}