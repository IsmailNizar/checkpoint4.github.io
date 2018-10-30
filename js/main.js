function bold (){
    document.getElementById("para").style.fontWeight = "bold";
}
function italic (){
    document.getElementById("para").style.fontStyle = "italic";
}
function underlined (){
    document.getElementById("para").style.textDecoration = "underline";
}
function cancel (){
    document.getElementById("para").style.textDecoration = "none";
    document.getElementById("para").style.fontStyle = "normal";
    document.getElementById("para").style.fontWeight = "normal";
    document.getElementById("para").style.fontFamily = 'Arial, Helvetica, sans-serif'; 
    document.getElementById("style").selectedIndex ="Arial";
    document.getElementById("para").style.fontSize = '1.5em' ;
    document.getElementById("Taille").selectedIndex ='1.5em';
}



var array = ["url('../res/img3.jpg')" , "url('../res/img6.jpg')" , "url('../res/img5.jpg')" ,"url('../res/img4.jpg')" ];
var i =0  ;

/* it works without the boucle for but when i put the boucle it's not working */  

setInterval(function repeat(){ 
    i++;
    if (i > 4) {i= 0;} 
    document.body.style.backgroundImage = array[i];
     
},10000);

function changeStyle() {
    var e = document.getElementById("style");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser == "Arial"){
        document.getElementById("para").style.fontFamily = 'Arial, Helvetica, sans-serif'; 
   }else if (strUser == "Bellino") {
    document.getElementById("para").style.fontFamily = 'bellino'; 
   }
   else if (strUser == "Mentega") {
    document.getElementById("para").style.fontFamily = 'mentega'; 
   }
   else if (strUser == "Sketch") {
    document.getElementById("para").style.fontFamily = 'sketch'; 
   }
}

function changeTaille() {
    var e = document.getElementById("Taille");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser == "10px"){
        document.getElementById("para").style.fontSize ='10px' ;
   }else if (strUser == "22px") {
    document.getElementById("para").style.fontSize ='22px' ; 
   }
   else if (strUser == "1em") {
    document.getElementById("para").style.fontSize ='1em' ; 
   }
   else if (strUser == "1.5em") {
    document.getElementById("para").style.fontSize ='1.5em' ;
   }
}

