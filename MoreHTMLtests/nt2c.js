function laskeHinta(){
    if (document.getElementById("2.luokka").checked){
        if(document.getElementById("Meno").checked){
            if(document.getElementById("valkosipuli").checked){
                var value = 86.10*0.5
            }
            else{
                value = 86.10
            }
        }
        else{
            if(document.getElementById("valkosipuli").checked){
                value = 2*86.10*0.5
            }
            else{
                value = 2*86.10
            }
        }
    }
    if (document.getElementById("1.luokka").checked){
        if(document.getElementById("Meno").checked){
            value = 140.61
        }
        else{
            value = 140.61*2
        }
    }
    var xLippuja = document.getElementById("Lippuja (kpl)")[document.getElementById("Lippuja (kpl)").selectedIndex].text
    var newvalue = value * xLippuja
    document.getElementById("hinta").innerHTML = "Kokonaishinta: " + newvalue.toFixed(2) + " &#8364"
}

