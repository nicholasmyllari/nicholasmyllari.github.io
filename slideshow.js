var playing = true;
var news = null;
if (!localStorage.current) {
	localStorage.current = 0;
}

var timer = window.setInterval(function(){naturalNext();},6000);

function setNews() {
	$('.news').fadeOut(400, function() {
        $('#newsHeadline').html(news[localStorage.current].otsikko);
   	    $('#newsContent').html(news[localStorage.current].sisältö);
   	    $('#newsDate').html(news[localStorage.current].päivämäärä);
	});
    $('.news').fadeIn(400);
}
function togglePauseText() {
	if (playing) {
		document.getElementById("pause").textContent = "Pysäytä";
	} else {
		document.getElementById("pause").textContent = "Jatka";
	}
}
window.onload = function() {
	$.getJSON("https://myllarn1-5488c.firebaseio.com/uutiset.json", function (data) {
    console.log(data);
    news = data;
    setNews();
  });
};
function playPause() {
	if (playing) {
		playing = false;
		clearInterval(timer);
	} else {
		playing = true;
		timer = window.setInterval(function(){naturalNext();},6000); 
	}
	togglePauseText();
}

function naturalNext() {
	localStorage.current ++;
	localStorage.current = localStorage.current % 3;
    setNews();
}

function next() {
	playing = false;
	clearInterval(timer);
	naturalNext();
	togglePauseText();
}

function prev() {
	playing = false;
	clearInterval(timer);
	localStorage.current ++;
	localStorage.current ++;
	localStorage.current = localStorage.current % 3;
    setNews();
    togglePauseText();
}