let input = document.querySelector("input");

input.addEventListener("change", getDimesions);

function getDimesions(){
    console.log(this.files);  //it can be input instead of this.
    let dimensions = [];
    for(let i = 0; i<this.files.length; i++){
    let file = this.files[i];
    let promise = new Promise((resolve, reject) => {
        let src = window.URL.createObjectURL(file);
        let image = new Image();

        image.onload = function(){
            resolve(image.width);
            //console.log(image.width);
            //console.log(image.height);

        }
        image.src = src ;
        window.URL.revokeObjectURL(src);
        
      });
      dimensions.push(promise);
    }
    console.log(dimensions);
    Promise.all(dimensions).then(function(dimensions){
        console.log(dimensions);

    });
}

