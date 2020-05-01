// let images = [
//     "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
//     "https://scipy-lectures.org/_images/face.png",
//     "https://lenergeek.com/wp-content/uploads/2019/11/france-image-marche-energie-degrade-LEnergeek.jpg",
//     "https://www.gettyimages.ch/gi-resources/images/500px/983794168.jpg",
// ];
/** we will use an API to dynamivally load images from another website */

/**
 * 1. declare an empty variable for our images
 * 2.fetch the images from external site via API
 * 3. parse the JSON response of API
 * 4. loop through JSON objects and get url
 * 5.store url in variable
 */
//1. declare an empty variable for our images:
let images =[];

//2.fetch the images from external site via API:
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//3. parse the JSON response of API:
     .then(response => response.json())
     .then(data => {
// 4. loop through JSON objects and get url
         for( let i=0; i< 10; i++){
             let obj = data[i];
//5.store url in variable
             images.push(obj.url);
         }
        console.log(images);
     });

let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

imgTag.src=images[counter];

prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);

function slideToNext(){
    //console.log(counter+" >");
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter];
        imgTag.src = nextSlide;
    }
}

function slideToPrev(){
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter];
        imgTag.src = prevSlide;
    }
}

function slide(){
    /** direction: next or previous slide */
    /** currentSlide: which image (index of the images array is visible) */
    /** container for that image: img-tag to replace the src attribute */
    let currentSlide = images[counter];

}