function price(){
    var rate = document.getElementById("rate").value;
    var hours = Number(document.getElementById("hours").value);
    var tax = .0825;
    totalPrice = rate * hours;
    totalPriceWTax = (totalPrice * tax) + totalPrice;
    document.getElementById("total").innerHTML = "$"+Number(totalPriceWTax).toFixed(2);
}
function validate() {
    var hours = Number(document.getElementById("hours").value);
    if(hours <= 0 ) {
        alert("Please enter in a valid amount of hours.");
        document.getElementById("total").innerHTML = " ";
        return false;
    }
    else{
        return true;
    }
}