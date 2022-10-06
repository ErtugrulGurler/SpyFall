const colors = ['red','white'];
let oyuncu1 = document.getElementById("player1");
let oyuncu2 = document.getElementById("player2");
let oyuncu3 = document.getElementById("player3");
let oyuncu4 = document.getElementById("player4");
let oyuncu5 = document.getElementById("player5");
let oyuncu6 = document.getElementById("player6");
let oyuncu7 = document.getElementById("player7");
let oyuncu8 = document.getElementById("player8");
let casus1 = document.getElementById("spy1");
let casus2 = document.getElementById("spy2");
let casus3 = document.getElementById("spy3");

let oyuncuListe = [oyuncu1,oyuncu2,oyuncu3,oyuncu4,oyuncu5,oyuncu6,oyuncu7,oyuncu8];
let casusListe = [casus1,casus2,casus3];
function paragrafEkle(){
    
}
function oyuncuSayısı(){
    for (let i=0;i<=7;i++){
        let oyuncu = oyuncuListe[i];
        if(oyuncu.style.backgroundColor==="red"){
            return i+1;
        }
    }
}
function casusSayısı(){
    for (let i=0;i<=2;i++){
        let casus = casusListe[i];
        if(casus.style.backgroundColor==="red"){
            return i+1;
        }
    }
}
for (let i=0;i<=7;i++){
    let index = 0;
    oyuncuListe[i].addEventListener('click', function onClick() {
    oyuncuListe[i].style.backgroundColor = colors[index];
    
    index = index >= colors.length - 1 ? 0 : index + 1;
});}
for (let i=0;i<=2;i++){
    let index = 0;
    casusListe[i].addEventListener('click', function onClick() {
    casusListe[i].style.backgroundColor = colors[index];
    
    index = index >= colors.length - 1 ? 0 : index + 1;
});}