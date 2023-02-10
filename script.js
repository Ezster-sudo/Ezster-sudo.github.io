let currentPhoto = 0;
let imagesData = [{
    photo: 'pics/photo_1.jpg',
    title: 'Juhász',
    description: 'A kutyát évezredek óta használja az ember arra, hogy a haszonállatait terelje és védje, mely eredményeképpen létrejöttek a legkiválóbb pásztorkutyák / juhászkutyák.'
  },{
    photo: 'pics/photo_2.jpg',
    title: 'Fiatal',
    description: 'Szinte a "pásztortudással együtt születnek", a kiképzésük során legtöbbször csak a természetes ösztöneiket kell továbbfejleszteni, illetve néhány alapvető engedelmességi parancsot kell megtanulnia, mint pl. hívás jöjjön vagy parancsra megálljon.'
},{ 
    photo: 'pics/photo_3.jpg',
    title: 'Okos',
    description: 'Ezután már szinte csak meg kell várnia a kutya 6-10 hónapos korát, amikor magától "futni kezd", habár néhány kutya ennél sokkal fiatalabban is dolgozni szeretne.'
},{
    photo: 'pics/photo_4.jpg',
    title: 'Gyors',
    description: 'Értelmes és fáradhatatlan, a pumi vakmerően bátor, a kuvasz erős és megvesztegethetetlen, míg a komondor nemcsak félelmetesen erős, de méltóságteljes is.'  
},{
    photo: 'pics/photo_5.jpg',
    title: 'Látható',
    description: 'Hogy csak a magyar kutyafajták között is mennyi a különbség még akkor is, ha hasonló célból tenyésztik őket. Mindezeknek megfelelően más helyzetekben, más állatok terelésére érdemes ezeket a juhászkutyákat felhasználni.'
  },{
    photo: 'pics/photo_6.jpg',
    title: 'Kedves',
    description: 'Természetű kutya; rendkívül szelíd, de félelmet nem ismer. Fogékony, tanulékony, hűséges. Éber, de ennek ellenére csendes, nem ugatós. Ragaszkodó, szinte hihetetlenül könnyen kezelhető.'
},{ 
    photo: 'pics/photo_7.jpg',
    title: 'Legenda',
    description: 'Úgy szól, hogy a római légiók vitték be Svájcba, mintegy kétezer évvel ezelőtt.'
},{
    photo: 'pics/photo_8.jpg',
    title: 'Gyors',
    description: 'Végigvonuló seregeik számára ugyanis kulcsfontosságú volt az ellátóvonalak és a raktárak őrzése.'  
}]; 

$('#photo').attr('src',imagesData[currentPhoto].photo);
$('#title').text(imagesData[currentPhoto].title);
$('#description').text(imagesData[currentPhoto].description);

let loadcurrentPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
  }
   
  $('#right-click').click(() => {
    currentPhoto++;
    currentPhoto %= imagesData.length; 
    loadcurrentPhoto(currentPhoto);
  });

  $('#left-click').click(() => {
    if(currentPhoto > 0) { 
      currentPhoto--; 
    } else {
    currentPhoto = imagesData.length - 1;}
    loadcurrentPhoto(currentPhoto);
  });

imagesData.forEach((item, index) => {
    $('.thumbnails').append(`<div class="smalls" data-index="${index}"><h2 class ="title">${item.title}</h2><img src="${item.photo}" class="smalldog"></div>`);                         
    $('.smalls').click((event) => {
    let indexClicked = $(event.target).parent().attr('data-index');
    let numberIndex = parseInt(indexClicked);
    $('#photo').attr('src', imagesData[numberIndex].photo);
    $('#title').text(imagesData[numberIndex].title);
    $('#description').text(imagesData[numberIndex].description);
    });
    });

    