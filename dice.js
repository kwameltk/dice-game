// //first dice player
// const randomNum_1 = Math.floor(Math.random()* 6) + 1
// var diceImage = "images/dice" + randomNum_1 + ".png";
// document.querySelectorAll("img")[0].setAttribute("src",diceImage);

// //second dice player
// const randomNum_2 = Math.floor(Math.random()* 6) + 1
// var diceImage2 = "images/dice" + randomNum_2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src",diceImage2);



// //arguments

//     if(randomNum_1 > randomNum_2){
//      output = document.querySelector("h1").innerHTML = "Player 1 Wins";
// }
// else if(randomNum_2 > randomNum_1){
//     output = document.querySelector("h1").innerHTML = "Player 2 Wins";
// }
// else if(randomNum_1 === randomNum_2)
//     output = document.querySelector("h1").innerHTML = "No Winner";

// console.log();


//first dice player
const randomNum_1 = Math.floor(Math.random()* 6) + 1
var diceImage = "images/dice" + randomNum_1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImage);

//second dice player
const randomNum_2 = Math.floor(Math.random()* 6) + 1
var diceImage2 = "images/dice" + randomNum_2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

//arguments
function ludugame(){
    if(randomNum_1 > randomNum_2){
     output = document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNum_2 > randomNum_1){
    output = document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else if(randomNum_1 === randomNum_2)
    output = document.querySelector("h1").innerHTML = "No Winner";
}
ludugame();