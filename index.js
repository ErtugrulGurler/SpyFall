let oyuncu3 = document.getElementById("player3");
let oyuncu4 = document.getElementById("player4");
let oyuncu5 = document.getElementById("player5");
let oyuncu6 = document.getElementById("player6");
let oyuncu7 = document.getElementById("player7");
let oyuncu8 = document.getElementById("player8");
let casus1 = document.getElementById("spy1");
let casus2 = document.getElementById("spy2");

let oyuncuListe = [oyuncu3,oyuncu4,oyuncu5,oyuncu6,oyuncu7,oyuncu8];
let casusListe = [casus1,casus2];


function oyuncuSayısı(){
    for (let i=0;i<=5;i++){
        let oyuncu = oyuncuListe[i];
        if(oyuncu.style.backgroundColor==="red"){
            return i+3;
        }
    }return 0;
}

function casusSayısı(){
    for (let i=0;i<=1;i++){
        let casus = casusListe[i];
        if(casus.style.backgroundColor==="red"){
            return i+1;
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
for (let i=0;i<=1;i++){
    let flag=false;

    casusListe[i].addEventListener('click', function onClick() {
    if(flag===false){
    casusListe[i].style.backgroundColor = "red";
    for(let x=0;x<=1;x++){
        if(casusListe[i]!==casusListe[x]){
            casusListe[x].disabled = true;
            flag =true;
        }
        }
    }
    else {
        for(let x=0;x<=1;x++){
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
    for(let i=0;i<=1;i++){
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
    let casusSayı = casusSayısı();
    for (let x=0;x<casusSayı;x++){casusSec();}
}
const Ordugah = ["Er","General","İstihbarat Memuru","Koalisyon Askeri","Bomba İmha Uzmanı","Sıhıye","Taktisyen","Aşçı"];
const Cami = ["Hoca","Müezzin","Dilenci","Cemaat","Günahkar","Kuran Hocası","Talebe","Temizlikçi"];
const Kumarhane = ["Barmen","Güvenlik Görevlisi","Kurupiyer","Müdür","Müdür Yardımcısı","Kumarbaz","Garson","Temizlikçi"];
const Kumsal = ["Garson","Sörfçü","Can Kurtaran","Hırsız","Tatilci","Fotoğrafçı","Dondurma Satıcısı","Balıkçı"];
const Banka = ["Güvenlik Görevlisi","Müşteri Temsilcisi","Zırhlı Araç Satıcısı","Müdür","Müşteri","Hırsız","Gişe Memuru","Hademe"];
const EsnafOfisi = ["Elektrikçi","Avukat","Balıkçı","Bakkal","Tedarikçi","Kebapçı","Taksici","Kuruyemişçi"];
const TeröristKampı = ["Taktisyen","Casus","Uyuşturucu Tüccarı","Tedarikçi","Rehber","Terörist","Savaş Ağası","Bombacı"];
const Tiyatro = ["Eleştirmen","Suflör","Kasiyer","İzleyici","Yönetmen","Aktör","Sahne Görevlisi","Makyöz"];
const Akademi = ["Profesör","Araştırma Görevlisi","Öğrenci","Dekan","Hademe","Aşçı","Güvenlik Görevlisi","Kantinci"];
const YolcuGemisi = ["Yolcu","Mürettebat Üyesi","Operatör","Dümenci","Garson","Kaptan","Aşçı","Müzisyen"];
const Havalimanı = ["Birinci Sınıf Yolcu","Güvenlik Görevlisi","Pilot","Hostes","Yolcu","Kule Operatörü","Marshall","Pasaport Polisi"];
const KorsanGemisi = ["2.Kaptan","Avcı","Haydut","Haritacı","Aşçı","Dümenci","Korsan","Kaptan"];
const Saray = ["Padişah","Harem Ağası","Vezir","Şeyhülislam","Cariye","Sultan","Muhafız","Elçi"];
const Süpermarket=["Müşteri","Kasiyer","Kasap","Hademe","Güvenlik Görevlisi","Tedarikçi","Kantarcı","Depo Görevlisi"];
const Denizaltı=["Sonar Teknisyeni","Navigatör","Operatör","Denizci","Elektrik Teknisyeni","Komutan","Aşçı","Kaptan"];
const Uzayİstasyonu=["Mühendis","Uzaylı","Uzay Gezgini","Pilot","Kumandan","Bilim İnsanı","Doktor","Ekip Üyesi"];
const Tamirhane=["Boyacı","Araba Yıkayıcı","Araç Sahibi","Motor Ustası","Elektirikçi","Egzozcu","Tekerlekçi","Çırak"];
const Katedral = ["Rahip","Rahibe","Dilenci","Cemaat","Günahkar","Koro Üyesi","Turist","Sponsor"];
const SirkÇadırı = ["Akrobat","Hayvan Terbiyecisi","Sihirbaz","Ziyaretçi","Ateş Yutan","Sunucu","Palyaço","Hokkabaz"];
const İşPartisi = ["Ev Sahibi","Menajer","Davetsiz Misafir","Şovmen","Sekreter","Muhasebeci","Kurye","İş Ortağı"];
const HaçlıOrdusu = ["Keşiş","Hizmetçi","Rahip","Okçu","Şövalye","Esir","Papa","Soylu"];
const Spa = ["Stilist","Masöz","Manikürcü","Makyöz","Dermatolog","Güzellik Uzmanı","Müşteri","Rezervasyon Görevlisi"];
const Büyükelçilik = ["Güvenlik Görevlisi","Sekreter","Büyükelçi","Devlet Memuru","Turist","Mülteci","Diplomat","Çevirmen"];
const Hastane = ["Hemşire","Doktor","Anestezist","Stajyer","Hasta","Terapist","Cerrah","Hademe"];
const Otel = ["Rezervasyon Görevlisi","Güvenlik Görevlisi","Müdür","Temizlikçi","Müşteri","Barmen","Garson","Aşçı"];
const FilmStüdyosu = ["Set Fotoğrafçısı","Şive Koçu","Figüran","Kameraman","Kostüm tasarımcısı","Animatör","Başrol oyuncusu","Dublör"];
const YolcuTreni = ["Tren Şefi","Makinist","Hareket Memuru","Operatör","Kondüktör","İstasyon Şefi","Demiryolu Bakımcısı","Bagaj Memuru"];
const Polisİstastonu = ["Dedektif","Muhasebeci","Avukat","Gazeteci","Kriminalog","Suçlu","Polis","Devriye Memuru"];
const Restoran = ["Aşçı","Garson","Şef Garson","Müzisyen","Gurme","Müşteri","Güvenlik Görevlisi","Tedarikçi"];
const Okul = ["Sınıf Öğretmeni","Rehber Öğretmen","Beden Öğretmeni","Müdür","Hademe","Müdür Yardımcısı","Servis Şöförü","Servis Hostesi"];
const Park = ["Ebeveyn","Uslu Çocuk","Mızmız Çocuk","Ergen","Güvelik Görevlisi","Hademe","Pamukşeker Satıcısı","Simitçi"];
const SanatMüzesi = ["Rehber","Tarihçi","Sanat Eleştirmeni","Fotoğrafçı","Turist","Öğrenci","Biletçi","Ziyaretçi"];
const ŞekerFabrikası = ["Pasta Şefi","Tedarikçi","Makine Operatörü","Tadımcı","Müfettiş","Şekerçi","Makinist","Müdür"];
const KediŞovu = ["Jüri","Veteriner","Kedi Sahibi","Kedi","Hayvan Sever","Kedili Deli Kadın","Eğitmen","Biletçi"];
const Cenaze = ["Hoca","Gasilhane Çalışanı","Ölenin Eşi","Ölenin Kardeşi","Ölü","Mezarcı","Ağlayan Kişi","Tabut Taşıyan"];
const Maden = ["Güvenlik Müfettişi","Madenci","Gözetmen","Kamyon Operatörü","Toprak Delici","Koordinatör","Patlatma Müdendisi","Katı Atık Mühendisi"];
const İnşaat = ["Müteahhit","Vinç Operatörü","Elektrikçi","Mühendis","Mimar","İnşaat Ustası","İnşaat İşçisi","Yıkım Mühendisi"];
const OyunToplantısı = ["Ünlü Oyuncu","Oyun Yapımcısı","Çocuk","Ziyaretçi","Koleksiyoncu","Oyun Satıcısı","Oyun Bağımlısı","Vlog Çeken"];
const Benzinİstasyonu = ["Market Çalışanı","Cam Silen","Araba Yıkayan","Tekerlek Şişiren","Müşteri","Pompacı","Tedarikçi","Kamyoncu"];
const Liman = ["Denizci","Kargo Müfettişi","Kargo Taşıyan","Kargo Sorumlusu","Kaçakçı","Balıkçı","Kaptan","İhracatçı"];
const HokeyStadyumu = ["Hokey Hayranı","Doktor","Hokey Oyuncusu","Satıcı","Güvenlik Görevlisi","Kaleci","Koç","Seyirci"];
const Hapishane = ["Masum Suçlanan","Koruma","Ziyaretçi","Avukat","Kapıcı","Gardiyan","Hapisane Memuru","Deli"];
const CazKulubü= ["VİP","Barmen","Dansçı","Caz Seven","Şarkıcı","Saksafoncu","Piyanist","Davulcu"];
const Kütüphane= ["Yaşlı Adam","Yazar","Gönüllü","Öğrenci","Kütüphaneci","Sesli Konuşan","Kitap Kurdu","İnek Öğrenci"];
const GeceKlübü= ["Utangaç Dansçı","Güvenlik Görevlisi","Model","Parti Manyağı","Sarhoş","Parti Kızı","Tedarikçi","Barmen"];
const YarışPisti= ["Takım Kaptanı","Sürücü","Mühendis","Pist Ekip Üyesi","Spiker","İzleyici","Yemek Satıcısı","Tamirci"];
const Huzurevi= ["Hasta Yakını","Yaşlı İnsan","Hemşire","Hademe","İlaç Dağıtıcı","Psikolog","Aşçı","Ziyaretçi"];
const Konser= ["Dansçı","Solist","Hayran","Gitarist","Davulcu","Piyanist","Teknik Destek Ekibi Üyesi","Müşteri"];
const GeziOtobüsü= ["Yaşlı Adam","Turist","Sürücü","Mız Mız Çocuk","Tur Rehberi","Fotoğrafçı","Kaybolmuş Yolcu","Hırsız"];
const Stadyum= ["Doktor","Sporcu","Hakem","İzleyici","Antrenör","Engelli Koşu Koşucusu","100 Metre Koşucusu","Fizyoterapist"];
const Metro= ["Yolcu Kontrol Memuru","Anons Memuru","Metro Şöförü","Güvenlik Görevlisi","Hademe","Tamirci","Yolcu","Mız Mız Çocuk"];
const BirleşmişMilletler= ["Diplomat","Tercüman","Uyuklayan Delege","Gazeteci","Koruma","Genel Sekreter","Danışman","Güvenlik Görevlisi"];
const ÜzümBağı= ["Üzüm Taşıyıcısı","Zengin Bağ Sahibi","Çiftçi","Uşak","İhracatçı","Şarap Üreticisi","Gurme","Bahçıvan"];
const Düğün= ["Baldız","Mekan Sahibi","Aşçı","Garson","Kayın Valide","Kayın Peder","Damat","Gelin"];
const HayvanatBahçesi= ["Bakıcı","Ziyaretçi","Fotoğrafçı","Çocuk","Veteriner","Turist","Kasiyer","Zoolog"];

const classList = [Ordugah,Cami,Kumarhane,Kumsal,Banka,EsnafOfisi,TeröristKampı,Tiyatro,Akademi,YolcuGemisi,Havalimanı,KorsanGemisi,Saray,Süpermarket,Denizaltı,Uzayİstasyonu,Tamirhane,Katedral,SirkÇadırı,İşPartisi,HaçlıOrdusu,Spa,Büyükelçilik,Hastane,Otel,FilmStüdyosu,YolcuTreni,Polisİstastonu,Restoran,Okul,Park,SanatMüzesi,ŞekerFabrikası,KediŞovu,Cenaze,Maden,İnşaat,OyunToplantısı,Benzinİstasyonu,Liman,HokeyStadyumu,Hapishane,CazKulubü,Kütüphane,GeceKlübü,YarışPisti,Huzurevi,Konser,GeziOtobüsü,Stadyum,Metro,BirleşmişMilletler,ÜzümBağı,Düğün,HayvanatBahçesi];
const classListStrings = ["Ordugah","Cami","Kumarhane","Kumsal","Banka","Esnaf Ofisi","Terörist Kampı","Tiyatro","Akademi","Yolcu Gemisi","Havalimanı","Korsan Gemisi","Saray","Süpermarket","Denizaltı","Uzay İstasyonu","Tamirhane","Katedral","Sirk Çadırı","İş Partisi","Haçlı Ordusu","Spa","Büyükelçilik","Hastane","Otel","Film Stüdyosu","Yolcu Treni","Polis İstastonu","Restoran","Okul","Park","Sanat Müzesi","Şeker Fabrikası","Kedi Şovu","Cenaze","Maden","İnşaat","Oyun Toplantısı","Benzin İstasyonu","Liman","Hokey Stadyumu","Hapishane","Caz Kulübü","Kütüphane","Gece Klübü","Yarış Pisti","Huzurevi","Konser","Gezi Otobüsü","Stadyum","Metro","Birleşmiş Milletler","Üzüm Bağı","Düğün","Hayvanat Bahçesi"];



let random = randomNum(classList.length);
function randomClassRole(class_string,role_string){
    let class_text = document.getElementById(class_string);
    let role_text = document.getElementById(role_string);
    class_text.innerHTML = classListStrings[random];
    let num=classList[random].length;
    let randomRole=randomNum(num);
    
    
    
    role_text.innerHTML = classList[random][randomRole];
    classList[random].splice(randomRole,1);




    class_text.style.fontSize = "30px";
    class_text.style.fontWeight = "800";
    role_text.style.fontSize = "30px";
    role_text.style.fontWeight = "800";
    
}
function casusSec(){
    let casusNum=randomCasusNum();
    let casusHeader = document.getElementById("class"+casusNum);
    let casusParagraph = document.getElementById("role"+casusNum);
    if(casusHeader.innerHTML == "Casus"){casusSec();}
    casusHeader.innerHTML = "Casus";
    casusHeader.style.color = "red";
    casusHeader.style.fontSize = "40px";
    casusHeader.style.fontWeight = "800";
    casusParagraph.innerHTML = "? ? ? ? ? ? ?";
    casusParagraph.style.color = "red";
    casusParagraph.style.fontSize = "40px";
    casusParagraph.style.fontWeight = "800";
}

let closeBtn0 = document.getElementById("closeBtn_0").addEventListener("click",function(){
    let button = document.getElementById("button_0");
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
    
});
let closeBtn1 = document.getElementById("closeBtn_1").addEventListener("click",function(){
    let button = document.getElementById("button_1")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
let closeBtn2 = document.getElementById("closeBtn_2").addEventListener("click",function(){
    let button = document.getElementById("button_2")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
let closeBtn3 = document.getElementById("closeBtn_3").addEventListener("click",function(){
    let button = document.getElementById("button_3")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
let closeBtn4 = document.getElementById("closeBtn_4").addEventListener("click",function(){
    let button = document.getElementById("button_4")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
let closeBtn5 = document.getElementById("closeBtn_5").addEventListener("click",function(){
    let button = document.getElementById("button_5")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
let closeBtn6 = document.getElementById("closeBtn_6").addEventListener("click",function(){
    let button = document.getElementById("button_6")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
let closeBtn7 = document.getElementById("closeBtn_7").addEventListener("click",function(){
    let button = document.getElementById("button_7")
    button.disabled=true;
    button.style.backgroundColor="rgba(255,0,0,0.8)";
});
    
function randomNum(num){
    return Math.floor(Math.random()*num);
}
function randomCasusNum(){
    let num = oyuncuSayısı();
    return Math.floor(Math.random()*num);
}
let length = classListStrings.length;
let length1 = classList.length;
console.log(length);
console.log(length1);
liste1=document.getElementById("liste1");
for(let x=0;x<length/3;x++){
    let listeOne = document.createElement("li");
    listeOne.innerHTML=classListStrings[x];
    liste1.appendChild(listeOne);
}
liste2=document.getElementById("liste2");
for(let x=Math.floor(length/3)+1;x<Math.floor(2*length/3);x++){
    let listeTwo = document.createElement("li");
    listeTwo.innerHTML=classListStrings[x];
    liste2.appendChild(listeTwo);
}
liste3=document.getElementById("liste3");
for(let x=Math.floor(2*length/3);x<length;x++){
    let listeThree = document.createElement("li");
    listeThree.innerHTML=classListStrings[x];
    liste3.appendChild(listeThree);
}