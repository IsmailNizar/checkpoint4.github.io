

function bold (){
    var element = document.getElementById("textarea");
    element.classList.toggle("style1");
}

function italic (){
    var element = document.getElementById("textarea");
    element.classList.toggle("style2");
}
function underlined (){
    var element = document.getElementById("textarea");
    element.classList.toggle("style3");
}

var array = ["black" , "grey" , "white" ];
var i =0  ;

setInterval(function repeat(){ 
    i++;
    if (i > 2) {i= 0;} 
     document.getElementById("titre").style.color = array[i];
     
},2000);

function changeStyle() {
    var e = document.getElementById("style");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser == "Arial"){
        document.getElementById("textarea").style.fontFamily = 'Arial, Helvetica, sans-serif'; 
   }else if (strUser == "Bellino") {
    document.getElementById("textarea").style.fontFamily = 'bellino'; 
   }
   else if (strUser == "Mentega") {
    document.getElementById("textarea").style.fontFamily = 'mentega'; 
   }
   else if (strUser == "Sketch") {
    document.getElementById("textarea").style.fontFamily = 'sketch'; 
   }
}

function changeTaille() {
    var e = document.getElementById("Taille");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser == "10px"){
        document.getElementById("textarea").style.fontSize ='10px' ;
   }else if (strUser == "22px") {
    document.getElementById("textarea").style.fontSize ='22px' ; 
   }
   else if (strUser == "1em") {
    document.getElementById("textarea").style.fontSize ='1em' ; 
   }
   else if (strUser == "1.5em") {
    document.getElementById("textarea").style.fontSize ='1.5em' ;
   }else if (strUser == "2em") {
    document.getElementById("textarea").style.fontSize ='2em' ;
   }
}


