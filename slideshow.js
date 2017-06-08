window.onload = function () {
    

    
//JSON data from firebase to console
$.getJSON("https://vayryna1.firebaseio.com/.json", function (data) {
    console.log(data);
});
    
}

//A counter that helps us change the article
var newsNo = 0;

//Storing newsNo to localStorage using get/setItem
function whichNews() {
    if ((localStorage.getItem('index')) === null || (localStorage.getItem('index')) > 2) {
        localStorage.setItem('index', 0);
        newsNo = 0;
    } else {
        newsNo = parseInt(localStorage.getItem('index'));
    }
}

//Showing the desired articles 
function showNews() {
   'use strict';    
   $.getJSON("https://vayryna1.firebaseio.com/.json", function (data) {    
       $('#headline').hide().html(data.news[newsNo].headline).fadeIn("slow"); 
       $('#date').hide().html(data.news[newsNo].date).fadeIn("slow");
       $('#contentInside').hide().html(data.news[newsNo].contentInside).fadeIn("slow");
    
});
    
}


//For future "shutdown" use
var isPaused = false;


//What happens if the next button is pressed?
function nextNews() {
    'use strict';
        if (newsNo === 2) {
            newsNo = 0;
            localStorage.setItem('index', newsNo);
            showNews();
        } else {
            newsNo += 1;
            showNews();
            localStorage.setItem('index', newsNo);
        }
    }

//What happens if the previous button is pressed?
function previousNews() {
    'use strict';
    if (newsNo === 0) {
        newsNo = 2;
        localStorage.setItem('index', newsNo);
        showNews();
    } else {
        newsNo -= 1;
        localStorage.setItem('index', newsNo);
        showNews();
    }
}

//Changing the text of Play/Pause button
function changePlayPause(button_id) {
    'use strict';
     if (document.getElementById(button_id).textContent == "Pause") {
        document.getElementById(button_id).textContent = "Play";
        } else {
        document.getElementById(button_id).textContent = "Pause";
    }
}
//Counting in order to change news
var laskuri = window.setInterval(function (){
    nextNews();
}, 6000);

//What happens if pause is pressed?
function plsStop() {
    'use strict';
    if (!isPaused) {
       window.clearInterval(laskuri);
       isPaused = true;
    } else {
        laskuri = setInterval(function() {
            nextNews();
        }, 6000);
        isPaused = false;
    }
}


showNews();

document.onload = function () {
    showNews();
    whichNews();
    laskuri;
}

    
