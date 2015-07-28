

/* Making #red disappear and show on mousedown/mouseup

// var disappearRed = function() {
// 	document.querySelector("#red").style.opacity=0;
// };
// var showRed = function(){
// 	document.querySelector("#red").style.opacity=1;
// };

// var red=document.querySelector("#red")
// red.addEventListener("mousedown",disappearRed );

// red.addEventListener("mouseup",showRed);

// ///// making #purple disappear and show on mouse down/mouse up

// var disappearPurple = function() {
// 	document.querySelector("#purple").style.opacity=0;
// };
// var showPurple = function(){
// 	document.querySelector("#purple").style.opacity=1;
// };

// var purple=document.querySelector("#purple")
// purple.addEventListener("mousedown",disappearPurple );

// purple.addEventListener("mouseup",showPurple);


// ///// making #yellow disappear and show on mouse down/mouse up

// var disappearYellow = function() {
// 	document.querySelector("#yellow").style.opacity=0;
// };
// var showYellow = function(){
// 	document.querySelector("#yellow").style.opacity=1;
// };

// var yellow=document.querySelector("#yellow")
// yellow.addEventListener("mousedown",disappearYellow );

// yellow.addEventListener("mouseup",showYellow);




// ///// making #green disappear and show on mouse down/mouse up

// var disappearGreen = function() {
// 	document.querySelector("#green").style.opacity=0;
// };
// var showGreen = function(){
// 	document.querySelector("#green").style.opacity=1;
// };

// var green =document.querySelector("#green")
// green.addEventListener("mousedown",disappearGreen );

// green.addEventListener("mouseup",showGreen);



// ///// making #blue disappear and show on mouse down/mouse up

// var disappearBlue = function() {
// 	document.querySelector("#blue").style.opacity=0;
// };
// var showBlue = function(){
// 	document.querySelector("#blue").style.opacity=1;
// };

// var blue =document.querySelector("#blue")
// blue.addEventListener("mousedown",disappearBlue );

// blue.addEventListener("mouseup",showBlue);


/////////*/

/*making loop . first make the array */

var nav = [ '#Bittersweet', '#Fashion_Fuchsia','#Alizarin_Crimson','#Carnation_Pink','#Bubble_Gum','#Fluorescent_Orange',
'#Deep_Saffron','#Dark_Tangerine', '#Coquelicot','#Deep_Carrot_Orange','#Dark_Turquoise','#Dark_Blue','#Diamond',
'#Denim','#Electric_Blue','#Ao','#Android_Green','#Arctic_Lime','#Bangladesh_Green','#Aquamarine'];

for (var myCounter = 0; myCounter < nav.length; myCounter = myCounter+1){
	var each = document.querySelector(nav[myCounter]);
	each.addEventListener("mousedown", function(mouseDownInfo){
		var elementThatGotClicked = mouseDownInfo.toElement;
		elementThatGotClicked.style.opacity=0;
		console.log(mouseDownInfo.toElement);	
	});

	each.addEventListener("mouseup", function(mouseUpInfo){
		var elementThatGotClicked = mouseUpInfo.toElement;
		elementThatGotClicked.style.opacity=1;
		console.log(mouseUpInfo.toElement);

	});
}






