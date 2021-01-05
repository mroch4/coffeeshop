var array = [
	"img/minis/001.png",
	"img/minis/002.png",
	"img/minis/003.png",
	"img/minis/004.png",
	"img/minis/005.png",
	"img/minis/006.png",
	"img/minis/007.png",
	"img/minis/008.png",
	"img/minis/001.png",
	"img/minis/002.png",
	"img/minis/003.png",
	"img/minis/004.png",
	"img/minis/005.png",
	"img/minis/006.png",
	"img/minis/007.png",
	"img/minis/008.png",
];

function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue;
	var randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
var shuffled_images = shuffle(array);

var c0 = document.getElementById('card0');
var c1 = document.getElementById('card1');
var c2 = document.getElementById('card2');
var c3 = document.getElementById('card3');

var c4 = document.getElementById('card4');
var c5 = document.getElementById('card5');
var c6 = document.getElementById('card6');
var c7 = document.getElementById('card7');

var c8 = document.getElementById('card8');
var c9 = document.getElementById('card9');
var c10 = document.getElementById('card10');
var c11 = document.getElementById('card11');

var c12 = document.getElementById('card12');
var c13 = document.getElementById('card13');
var c14 = document.getElementById('card14');
var c15 = document.getElementById('card15');

c0.addEventListener("click", function () { revealCard(0); });
c1.addEventListener("click", function () { revealCard(1); });
c2.addEventListener("click", function () { revealCard(2); });
c3.addEventListener("click", function () { revealCard(3); });

c4.addEventListener("click", function () { revealCard(4); });
c5.addEventListener("click", function () { revealCard(5); });
c6.addEventListener("click", function () { revealCard(6); });
c7.addEventListener("click", function () { revealCard(7); });

c8.addEventListener("click", function () { revealCard(8); });
c9.addEventListener("click", function () { revealCard(9); });
c10.addEventListener("click", function () { revealCard(10); });
c11.addEventListener("click", function () { revealCard(11); });

c12.addEventListener("click", function () { revealCard(12); });
c13.addEventListener("click", function () { revealCard(13); });
c14.addEventListener("click", function () { revealCard(14); });
c15.addEventListener("click", function () { revealCard(15); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;

function revealCard(nr) {
	var opacityValue = $('#card' + nr).css('opacity');

	if (opacityValue != 0 && lock == false) {
		lock = true;

		var obraz = "url(" + shuffled_images[nr] + ")";

		$('#card' + nr).css('background-image', obraz);
		$('#card' + nr).addClass('cardA');
		$('#card' + nr).removeClass('card');

		if (oneVisible == false) {
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}
		else {
			if (array[visible_nr] == array[nr]) {
				setTimeout(function () { hide2Cards(nr, visible_nr) }, 750);
			}
			else {
				setTimeout(function () { restore2Cards(nr, visible_nr) }, 1000);
			}
			turnCounter++;
			$('.score').html('Turn counter: ' + turnCounter);
			oneVisible = false;
		}
	}
}

function hide2Cards(nr1, nr2) {
	$('#card' + nr1).css('opacity', '0');
	$('#card' + nr2).css('opacity', '0');

	pairsLeft--;

	if (pairsLeft == 0) {
		$('.board').css('color', 'white');
		$('.board').css('font-size', '2em');
		$('.board').css('line-height', '2');
		$('.board').html('<h1>Gratulacje!<br>Wygrałeś w ' + turnCounter + ' ruchach</h1><input type="button" onClick="history.go(0)" value="Zagraj jeszcze raz!">');
	}
	lock = false;
}

function restore2Cards(nr1, nr2) {
	$('#card' + nr1).css('background-image', 'url(img/minis/karta.png)');
	$('#card' + nr1).addClass('card');
	$('#card' + nr1).removeClass('cardA');

	$('#card' + nr2).css('background-image', 'url(img/minis/karta.png)');
	$('#card' + nr2).addClass('card');
	$('#card' + nr2).removeClass('cardA');

	lock = false;
}