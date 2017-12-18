var video = document.querySelector(".ligne1 .colone1");
var zdz = document.querySelector(".ligne1 .colone2");

video.innerHTML += '<video src='+data.films[1].src+' class="oui"></video>';

console.log(data.films[1].rating);

if (data.films[1].rating === 5 ) {
    zdz.innerHTML += '<h1>'+data.films[1].title+'</h1><h2>'+data.films[1].duration+'</h2><div class="rate"><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""></div><p>'+data.films[1].description+'<p>';
  }  

if (data.films[1].rating === 4 ) {
    zdz.innerHTML += '<h1>'+data.films[1].title+'</h1><h2>'+data.films[1].duration+'</h2><div class="rate"><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""></div><p>'+data.films[1].description+'<p>';
  } 
if (data.films[1].rating === 3 ) {
      zdz.innerHTML += '<h1>'+data.films[1].title+'</h1><h2>'+data.films[1].duration+'</h2><div class="rate"><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""></div><p>'+data.films[1].description+'<p>';
  } 
if (data.films[1].rating === 2 ) {
      zdz.innerHTML += '<h1>'+data.films[1].title+'</h1><h2>'+data.films[1].duration+'</h2><div class="rate"><img src="img/star.png" alt=""><img src="img/star.png" alt=""></div><p>'+data.films[1].description+'<p>';
  }
if (data.films[1].rating === 1 ) {
       zdz.innerHTML += '<h1>'+data.films[1].title+'</h1><h2>'+data.films[1].duration+'</h2><div class="rate"><img src="img/star.png" alt=""></div><p>'+data.films[1].description+'<p>';
  }
    


var vid = document.querySelector(".oui");
var tg = 0;
vid.addEventListener('click',function() {
    if (tg > 0) {
    vid.pause();
    tg = 0;
    } else {
    vid.play();
    tg = 1;
    }
});
