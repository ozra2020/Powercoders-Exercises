// Add a script tag to the bottom of the HTML body.
// (In the JavaScript) Change the body tag's style so it has a fontfamily
// of "Arial, sans-serif".
// (In the JavaScript) Replace each of the spans (nickname,
// favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item".
// (In the HTML head ) Add a style tag that sets a rule for
// .list-item to make the color red.
// Create a new img element and set its src attribute to a
// picture of you. Append that element to the page.


document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerHTML = "Asma Rezaie";
document.getElementById("favorites").innerHTML = "Jogging, Biking, Playing Chess ";
document.getElementById("hometown").innerHTML = "Baden, Switzerland";
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
   items[i].className = "listitem";
}
 
 var myPic = document.createElement("img");
 myPic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwWG1iJ4Irn7NnSE5l64OF8l4fpkvPn_KVnRp_vxDo-vv6fCym&usqp=CAU";
 document.body.appendChild(myPic);