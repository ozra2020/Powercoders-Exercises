
//  Write code so that the colour inputs match the background generated on the first page load.
//  Display the initial CSS linear gradient property on page load.
//  Add a random button which generates two random numbers for the colour inputs.
 
 var css = document.querySelector("h3");
 var color1 = document.querySelector(".color1");
 var color2 = document.querySelector(".color2");
 var body = document.getElementById("gradient");
 var ranButton = document.getElementById("random");



 function BackgroundGredient(){
document.body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
css.textContent = document.body.style.background;

 }
//color1.addEventListener("change", BackgroundGredient);
//color2.addEventListener("change", BackgroundGredient);


//Hexadecimal based on 16 and has 6 character
// Math.random() generates any no. between 0 and 1 including decimal.
// Math.random() * 16 generates no. between 0 to 16 including decimal.
// Math.floor() removes the decimal part.
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	BackgroundGredient();
}

BackgroundGredient();

color1.addEventListener("change", BackgroundGredient);

color2.addEventListener("change", BackgroundGredient);

ranButton.addEventListener("click", randomColors);





