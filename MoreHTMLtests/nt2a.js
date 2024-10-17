function tarkastaYlinopeus(nopeusrajoitus, nopeus){
    var nopeusrajoitus = document.getElementById("1").value;
    var nopeus = document.getElementById("2").value;
    if (nopeusrajoitus <= 60 && nopeusrajoitus >=0){
        if (nopeus <= nopeusrajoitus){
            document.getElementById("tulos").innerHTML = "Toivota hyvää matkaa!";
            document.getElementById("liikennevirhemaksu").innerHTML =" ";
        }
        if (nopeus - nopeusrajoitus > 20){
            document.getElementById("tulos").innerHTML = "Kysy tulot ja laske päiväsakko!"
            document.getElementById("liikennevirhemaksu").innerHTML =" ";
        }
        if ((nopeus - nopeusrajoitus) < 11 && (nopeus-nopeusrajoitus) > 0){
            document.getElementById("tulos").innerHTML ="Määrää liikennevirhemaksu"
            document.getElementById("liikennevirhemaksu").innerHTML ="100 euroa!"
        }
        if ((nopeus - nopeusrajoitus) > 10 && (nopeus - nopeusrajoitus) < 16){
            document.getElementById("tulos").innerHTML ="Määrää liikennevirhemaksu"
            document.getElementById("liikennevirhemaksu").innerHTML ="170 euroa!"
        }
        if ((nopeus - nopeusrajoitus) > 15 && (nopeus-nopeusrajoitus) < 21){
            document.getElementById("tulos").innerHTML ="Määrää liikennevirhemaksu"
            document.getElementById("liikennevirhemaksu").innerHTML ="200 euroa!"
        }
    }
    else {
        if (nopeus <= nopeusrajoitus){
            document.getElementById("tulos").innerHTML ="Toivota hyvää matkaa!"
            document.getElementById("liikennevirhemaksu").innerHTML =" ";
        }
        if ((nopeus - nopeusrajoitus) > 20){
            document.getElementById("tulos").innerHTML ="Kysy tulot ja laske päiväsakko!"
            document.getElementById("liikennevirhemaksu").innerHTML =" ";
        }
        if ((nopeus - nopeusrajoitus) < 11 && (nopeus-nopeusrajoitus) > 0){
            document.getElementById("tulos").innerHTML ="Määrää liikennevirhemaksu"
            document.getElementById("liikennevirhemaksu").innerHTML ="70 euroa!"
        }        
        if ((nopeus - nopeusrajoitus) > 10 && (nopeus - nopeusrajoitus) < 16){
            document.getElementById("tulos").innerHTML ="Määrää liikennevirhemaksu"
            document.getElementById("liikennevirhemaksu").innerHTML ="140 euroa!"
        }
        if ((nopeus - nopeusrajoitus) > 15 && (nopeus-nopeusrajoitus) < 21){
            document.getElementById("tulos").innerHTML ="Määrää liikennevirhemaksu"
            document.getElementById("liikennevirhemaksu").innerHTML ="170 euroa!"
        }
    // else{
    //     document.getElementById("tulos").innerHTML ="Error..."
    // }
    }
}
//console.log(tarkastaYlinopeus(100, 73));