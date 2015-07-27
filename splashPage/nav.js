///

// Making #red disappear and show on mousedown/mouseup

var disappearRed = function() {
	document.querySelector("#red").style.opacity=0;
};
var showRed = function(){
	document.querySelector("#red").style.opacity=1;
};

var red=document.querySelector("#red")
red.addEventListener("mousedown",disappearRed );

red.addEventListener("mouseup",showRed);

///// making #purple disappear and show on mouse down/mouse up

var disappearPurple = function() {
	document.querySelector("#purple").style.opacity=0;
};
var showPurple = function(){
	document.querySelector("#purple").style.opacity=1;
};

var purple=document.querySelector("#purple")
purple.addEventListener("mousedown",disappearPurple );

purple.addEventListener("mouseup",showPurple);


///// making #yellow disappear and show on mouse down/mouse up

var disappearYellow = function() {
	document.querySelector("#yellow").style.opacity=0;
};
var showYellow = function(){
	document.querySelector("#yellow").style.opacity=1;
};

var yellow=document.querySelector("#yellow")
yellow.addEventListener("mousedown",disappearYellow );

yellow.addEventListener("mouseup",showYellow);




///// making #green disappear and show on mouse down/mouse up

var disappearGreen = function() {
	document.querySelector("#green").style.opacity=0;
};
var showGreen = function(){
	document.querySelector("#green").style.opacity=1;
};

var green =document.querySelector("#green")
green.addEventListener("mousedown",disappearGreen );

green.addEventListener("mouseup",showGreen);



///// making #blue disappear and show on mouse down/mouse up

var disappearBlue = function() {
	document.querySelector("#blue").style.opacity=0;
};
var showBlue = function(){
	document.querySelector("#blue").style.opacity=1;
};

var blue =document.querySelector("#blue")
blue.addEventListener("mousedown",disappearBlue );

blue.addEventListener("mouseup",showBlue);

























/*
////////////
var disappear = function(hashtag) {
	document.querySelector(hashtag).style.opacity = 0;
}
var show = function(hashtag) {
	document.querySelector(hashtag).style.opacity = 1;
}
var myDivHashtags = ['#red', '#purple', '#green', '#blue'];
///////////////////////
// Iterating over a list of four and printing out elements from an array
var theFirstFour = ["Rhonda", "Alec", "C", "D"];
var print = function(firstArg) {
	console.log(firstArg);
}
for (var myCounter = 0; myCounter < theFirstFour.length; myCounter = myCounter+1) {
	// print(theFirstFour[i]);
	console.log(theFirstFour[myCounter]);
}
// for (var x = 0; x < 10; x = x+1) {
// 	console.log(x);
// }   */