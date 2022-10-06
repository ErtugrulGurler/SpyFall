const colors = ['red','white'];
let oyuncu3 = document.getElementById("player3");
let oyuncu4 = document.getElementById("player4");
let oyuncu5 = document.getElementById("player5");
let oyuncu6 = document.getElementById("player6");
let oyuncu7 = document.getElementById("player7");
let oyuncu8 = document.getElementById("player8");
let casus1 = document.getElementById("spy1");
let casus2 = document.getElementById("spy2");
let casus3 = document.getElementById("spy3");

let oyuncuListe = [oyuncu3,oyuncu4,oyuncu5,oyuncu6,oyuncu7,oyuncu8];
let casusListe = [casus1,casus2,casus3];
function paragrafEkle(){
    
}
function oyuncuSayısı(){
    /*for (let i=0;i<=7;i++){
        let oyuncu = oyuncuListe[i];
        if(oyuncu.style.backgroundColor==="red"){
            return i+1;
        }
    }*/
}
function casusSayısı(){
    /*for (let i=0;i<=2;i++){
        let casus = casusListe[i];
        if(casus.style.backgroundColor==="red"){
            return i+1;
        }
    }*/
}
for (let i=0;i<=5;i++){
    let flag=false;

    oyuncuListe[i].addEventListener('click', function onClick() {
    if(flag===false){
    oyuncuListe[i].style.backgroundColor = "red";
    for(let x=0;x<=5;x++){
        if(oyuncuListe[i]!==oyuncuListe[x]){
            oyuncuListe[x].disabled = true;
            flag =true;
        }
        }
    }
    else {
        for(let x=0;x<=5;x++){
                oyuncuListe[x].disabled = false;
                flag =false;
                oyuncuListe[i].style.backgroundColor = "bisque";
            }
    }
});}
for (let i=0;i<=2;i++){
    let flag=false;

    casusListe[i].addEventListener('click', function onClick() {
    if(flag===false){
    casusListe[i].style.backgroundColor = "red";
    for(let x=0;x<=2;x++){
        if(casusListe[i]!==casusListe[x]){
            casusListe[x].disabled = true;
            flag =true;
        }
        }
    }
    else {
        for(let x=0;x<=2;x++){
                casusListe[x].disabled = false;
                flag =false;
                casusListe[i].style.backgroundColor = "bisque";
            }
    }
});}

function oyuncuCasusSec(){
    for(let i=0;i<=5;i++){
        let flag1=false;
        if(oyuncuListe[i].style.backgroundColor==="red"){
            flag1=true;
        }
    }
    for(let i=0;i<=2;i++){
        let flag2=false;
        if(casusListe[i].style.backgroundColor==="red"){
            flag2=true;
        }
    }
    if(flag1===false||flag2===false){
        alert("Oyuncu-casus seçilmedi.")
    }
}
