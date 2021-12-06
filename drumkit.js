var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "a":
	var sound1 = new Audio("music/mixkit-short-bass-hit-2299.mp3");
	sound1.play();
	break;

	case "b":
	var sound2 = new Audio("music/cymbal.mp3");
	sound2.play();
	break;

	case "c":
	var sound3 = new Audio('music/mixkit-orchestral-violin-jingle-2280.mp3');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('music/saxophone.mp3');
	sound4.play();
	break;

	case "e":
	var sound5 = new Audio('music/mixkit-hand-tribal-drum-562.mp3');
	sound5.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
