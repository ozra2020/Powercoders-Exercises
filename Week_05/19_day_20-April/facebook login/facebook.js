let database = [
    {
        username: "Susanne",
        password: "supersecret"
    },
    {
        username: "Mark",
        password: "secretive"
    }
];

let newsfeed = [
    {
        author: "Mark",
        title: "This is Mark's title",
        summary: "This is the summary of Mark's news entry."
    },
    {
        author: "Hussam",
        title: "This is Hussams's title",
        summary: "This is the summary of Hussam's news entry."
    },
    {
        author: "Andrina",
        title: "This is Andrina's title",
        summary: "This is the summary of Andrina's news entry."
    }
];

// check if user login is correct then show news feed.

let username = prompt("What is your user name?");
let password = prompt("What is your password?");

if(username === database[0].username & password === database[0].password){
    console.log("user Sussane is logged in");
} else if(username === database[1].username & password === database[1].password){
    console.log("user Mark is logged in"); 
} else{
    alert("Your login data is not correct.")
}

