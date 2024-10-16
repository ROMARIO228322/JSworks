function laskeUSD(){
    var summa = document.getElementById("summa").value;
    var USD = summa * 1.10427;
    document.getElementById("Laske").innerHTML = USD.toFixed(3) + " $";
}

function laskeEUR(){
    var summa = document.getElementById("summa").value;
    var EUR = summa/1.10427;
    document.getElementById("Laske").innerHTML = EUR.toFixed(3) + " &#8364";
}