for (let i = 0; i < data.films.length; i++) {
    document.body.innerHTML += '<video src='+data.films[i].src+' class="oui"></video>';
};

var vid = document.querySelectorAll(".oui");
var tg = 0;
var long = [];
for (let i = 0; i < vid.length; i++) {
    vid[i].addEventListener('click',function() {
        if (tg > 0) {
        vid[i].pause();
        tg = 0;
        } else {
        vid[i].play();
        tg = 1;
        }
    });
};

var input = document.querySelector(".non")
input.addEventListener('blur', function() {
        var filtre = input.value;
        document.body.innerHTML = " ";
        for (let i = 0; i < data.films.length; i++) {
            if (data.films[i].category == filtre) {
                console.log("gg");
                document.body.innerHTML += '<video src='+data.films[i].src+' class="oui"></video>';
            }
            tg = 0;
            var vid = document.querySelectorAll(".oui");
            for (let o = 0; o < vid.length; o++) {
                vid[o].addEventListener('click',function() {
                    if (tg > 0) {
                    vid[o].pause();
                    tg = 0;
                    } else {
                    vid[o].play();
                    tg = 1;
                    }   
            });
        };   
    }; 
});

