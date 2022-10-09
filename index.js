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


function oyuncuSayısı(){
    for (let i=0;i<=5;i++){
        let oyuncu = oyuncuListe[i];
        if(oyuncu.style.backgroundColor==="red"){
            return i+3;
        }
    }return 0;
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

function next(){
    let flag1=false;
    for(let i=0;i<=5;i++){
        if(oyuncuListe[i].style.backgroundColor==="red"){
            flag1=true;
        }
    }
    let flag2=false;
    for(let i=0;i<=2;i++){
        if(casusListe[i].style.backgroundColor==="red"){
            flag2=true;
        }
    }
    if(flag1==false||flag2==false){
        alert("Oyuncu-casus seçilmedi.");
    }else{paragrafEkle();}
}
let container = document.getElementById("isimler");
function paragrafEkle(){
    let toplam = oyuncuSayısı();
    for(let i=0;i<toplam;i++){
        let input = document.createElement("input");
        input.type = "text";
    input.id = "text_"+i;
    input.style.marginTop="5px";
    input.style.width="800px";
    input.style.height="170px";
    input.style.fontSize="80px";
    input.style.textAlign="center";
    input.style.border="5px solid brown";
    input.style.fontFamily="'Permanent Marker', cursive";
    input.style.borderRadius="30px";
    
    container.appendChild(input);
    }
}

function basla(){
    let toplam = oyuncuSayısı();
    for(let i=0;i<toplam;i++){
        let isim = document.getElementById("text_"+i);
        let value = isim.value;
        container.removeChild(isim);
        let button = document.createElement("button");
        button.type="button";
        button.RoleName="btn btn-info btn-lg";
        button.id = "button_"+i;
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#myModal_"+i);
        button.style.marginTop="5px";
        button.style.width="800px";
        button.style.height="100px";
        button.style.fontSize="100px";
        button.style.textAlign="center";
        button.style.border="5px solid brown";
        button.style.fontFamily="'VT323', monospace";
        button.style.borderRadius="30px";
        button.style.backgroundColor="brown";
        button.style.color="white";
        button.style.paddingBottom="150px";
        container.appendChild(button);
        button.innerHTML=value;
        let first = "class"+i;
        let second = "role"+i;

        button.addEventListener("click", randomClassRole(first,second));
    }
}
const Asker = ["Bomba Imha Uzmanı","Er","Sivil Polis"];
const Esnaf = ["Manav","Balıkçı","Elektrikçi"];
const Politikaci = ["Parti Başkanı","Ekonomi Bakanı","Milli Savunma Bakanı"];
const classList = [Asker,Esnaf,Politikaci];
const classListStrings = ["Asker","Esnaf","Politikaci"];
let random = randomNum();

function randomClassRole(class_string,role_string){
    let class_text = document.getElementById(class_string);
    let role_text = document.getElementById(role_string);
    let randomRole=randomNum();
    class_text.innerHTML = classListStrings[random];
    role_text.innerHTML = classList[random][randomRole];
}
function randomNum(){
    return Math.floor(Math.random()*classList.length);
}