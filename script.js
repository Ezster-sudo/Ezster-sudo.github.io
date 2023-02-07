let data = [{
    photo: 'pics/photo_1.jpg',
    title: 'Juhászkutyák',
    description: 'A kutyát évezredek óta használja az ember arra, hogy a haszonállatait terelje és védje, mely eredményeképpen létrejöttek a legkiválóbb pásztorkutyák / juhászkutyák.'
  },{
    photo: 'pics/photo_2.jpg',
    title: 'A fiatal juhászkutyák',
    description: 'Szinte a "pásztortudással együtt születnek", a kiképzésük során legtöbbször csak a természetes ösztöneiket kell továbbfejleszteni, illetve néhány alapvető engedelmességi parancsot kell megtanulnia, mint pl. hívás jöjjön vagy parancsra megálljon.'
},{ 
    photo: 'pics/photo_3.jpg',
    title: 'A kiképzőnek',
    description: 'Ezután már szinte csak meg kell várnia a kutya 6-10 hónapos korát, amikor magától "futni kezd", habár néhány kutya ennél sokkal fiatalabban is dolgozni szeretne.'
},{
    photo: 'pics/photo_4.jpg',
    title: 'A puli gyors',
    description: 'Értelmes és fáradhatatlan, a pumi vakmerően bátor, a kuvasz erős és megvesztegethetetlen, míg a komondor nemcsak félelmetesen erős, de méltóságteljes is.'  
},{
    photo: 'pics/photo_5.jpg',
    title: 'Látható tehát',
    description: 'Hogy csak a magyar kutyafajták között is mennyi a különbség még akkor is, ha hasonló célból tenyésztik őket. Mindezeknek megfelelően más helyzetekben, más állatok terelésére érdemes ezeket a juhászkutyákat felhasználni.'
  },{
    photo: 'pics/photo_6.jpg',
    title: 'Kedves, vidám',
    description: 'Természetű kutya; rendkívül szelíd, de félelmet nem ismer. Fogékony, tanulékony, hűséges. Éber, de ennek ellenére csendes, nem ugatós. Ragaszkodó, szinte hihetetlenül könnyen kezelhető.'
},{ 
    photo: 'pics/photo_7.jpg',
    title: 'A legenda',
    description: 'Úgy szól, hogy a római légiók vitték be Svájcba, mintegy kétezer évvel ezelőtt.'
},{
    photo: 'pics/photo_8.jpg',
    title: 'Egész Európán',
    description: 'Végigvonuló seregeik számára ugyanis kulcsfontosságú volt az ellátóvonalak és a raktárak őrzése.'  
}]; 

let currentPhoto = 0;



$(document).ready(function() {

    data.forEach(function (_index) {
    $('#photo').attr('src',data[currentPhoto].photo);
    $('#title').text(data[currentPhoto].title);
    $('#description').text(data[currentPhoto].description);
})});


//

//let currentPhoto = 0;
//let imagesData = [...];