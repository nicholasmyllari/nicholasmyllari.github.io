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

 
var v = document.getElementById('v');
var canvas = document.getElementById('c');
var context = canvas.getContext('2d');
var back = document.createElement('canvas');
var backcontext = back.getContext('2d');

var cw,ch;

function blackWhite(){
    cw = 600px;
    ch = 600px;
    canvas.width = cw;
    canvas.height = ch;
    back.width = cw;
    back.height = ch;
    draw(v,context,backcontext,cw,ch);
};

function draw(v,c,bc,w,h) {
    if(v.paused || v.ended) return false;
    // First, draw it into the backing canvas
    bc.drawImage(v,0,0,w,h);
    // Grab the pixel data from the backing canvas
    var idata = bc.getImageData(0,0,w,h);
    var data = idata.data;
    // Loop through the pixels, turning them grayscale
    for(var i = 0; i < data.length; i+=4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var brightness = (3*r+4*g+b)>>>3;
        data[i] = brightness;
        data[i+1] = brightness;
        data[i+2] = brightness;
    }
    idata.data = data;
    // Draw the pixels onto the visible canvas
    c.putImageData(idata,0,0);
    // Start over!
    setTimeout(function(){ draw(v,c,bc,w,h); }, 0);
}


function inverse() {

}