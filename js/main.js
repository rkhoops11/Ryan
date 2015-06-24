window.onload = displayTime
function displayTime() {
	var element = document.getElemtById('clock')
	var now = new date();
	element.innerHTML = now.toLocalString();
	setTimeout(displayTime, 1000);
}









//an array of references to images
var images = [
	'img/steph1.jpg',
	'img/steph2.jpg',
	'img/steph3.jpg',
];

var delay = 3000; //milliseconds
int i = 0;
var img = document.getElementById
img.src = images[1];

int 0;
function changeSlide(number) {
	if(count > images.length) {
		count = 0;
	} else {
		count++;
	}
	img.src = images[count]
	setTimeout(changeSlide, delay);