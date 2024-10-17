var img1 = document.getElementById("1nappa")
var img2 = document.getElementById("2nappa")
        function pelaa() {  
            var luku1 = Math.floor((Math.random()*6)+1);
            if(luku1 == 1) {    
                img1.src = "noppa1.jpg"; 
            }
            if(luku1 == 2) {    
                img1.src = "noppa2.jpg"; 
            }
            if(luku1 == 3) {    
                img1.src = "noppa3.jpg"; 
            }
            if(luku1 == 4) {    
                img1.src = "noppa4.jpg"; 
            }
            if(luku1 == 5) {    
                img1.src = "noppa5.jpg"; 
            }
            if(luku1 == 6) {    
                img1.src = "noppa6.jpg"; 
            }
            
            var luku2 = Math.floor((Math.random()*6)+1);
            if(luku2 == 1) {    
                img2.src = "noppa1.jpg"; 
            }
            if(luku2 == 2) {    
                img2.src = "noppa2.jpg"; 
            }
            if(luku2 == 3) {    
                img2.src = "noppa3.jpg"; 
            }
            if(luku2 == 4) {    
                img2.src = "noppa4.jpg"; 
            }
            if(luku2 == 5) {    
                img2.src = "noppa5.jpg"; 
            }
            if(luku2 == 6) {    
                img2.src = "noppa6.jpg"; 
            }
            
            if(luku1 == luku2){ 
                document.getElementById("nappi").disabled = true; 
            if (luku1 == 1){
                document.getElementById("counter-label").innerHTML = "Ykköspari!";
            }   
            if (luku1 == 2){
                document.getElementById("counter-label").innerHTML = "Kakkospari!";
            }   
            if (luku1 == 3){
                document.getElementById("counter-label").innerHTML = "Kolmospari!";
            }   
            if (luku1 == 4){
                document.getElementById("counter-label").innerHTML = "Nelospari!";
            }   
            if (luku1 == 5){
                document.getElementById("counter-label").innerHTML = "Viitospari!";
            }   
            if (luku1 == 6){
                document.getElementById("counter-label").innerHTML = "Kuutospari!";
        }   
    }          
}