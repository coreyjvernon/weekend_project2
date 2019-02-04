const readlineSync = require('readline-sync');

/*
let passCounter = 0;
let runCounter = 0;

if ((firstDown === "pass left") || (firstDown === "pass right")) {
    passCounter++
    if(passCounter === 3) {
        console.log("Touchdown!")
    }
}
*/
console.log('Congratulations! Your team made it to overtime of the Bowl Super Game! The next score wins!');
console.log('Time for the coin toss. Choose heads or tails.');
let coinToss = readlineSync.question( "Call it: (H)eads | (T)ails |: " ).toLowerCase();

switch(coinToss) {
    case "h":
    case "heads":
    case "t":
    case "tails":
    console.log('You won the toss and chose to receive the ball');
    break;
    default:
    console.log('You won the toss and chose to receive the ball!');
};

console.log('Its 1st down and 10. What play would you like to run?');
let firstDown = readlineSync.question( "Choose play:| run left | pass left | run right | pass right |: " );

switch(firstDown) {
    case "run left":
    case "run right":
    console.log('Gain of 6 yards.');
    break;
    case "pass left":
    case "pass right":
    console.log('Incomplete pass!');
    break;
    default:
    console.log('Penalty: Delay of game. 5 yard penalty. Repeat 1st down.');
};

if(firstDown === "run left" || firstDown === "run right"){ 
    console.log('Its 2nd and 4, choose your next play');
} else if(firstDown === "pass left" || firstDown === "pass right"
){ 
    console.log('Its 2nd and 10! Choose your next play.');
} else{
    console.log("2nd down and 15. Choose your next play.");
};

let secondDown = readlineSync.question( "2nd down :| run left | pass left | run right | pass right |: " );

switch(secondDown) {
    case "run left": 
    case "run right":
    console.log('Gain of 3 yards.');
    break;
    case "pass left": 
    case "pass right":
    console.log('2 yard gain.');
    break;
    default:
    console.log('Penalty: Delay of game. 5 yard penalty. Repeat 2nd down.');
};

if((secondDown === "run left" && firstDown === "run left" || firstDown === "run right") || (secondDown === "run right" && firstDown === "run right" || firstDown === "run left")) { 
    //if (firstDown === "run left" || firstDown === "run right"){ 
    console.log('3rd and 1.');
} else if((secondDown === "run left" && firstDown === "pass left" || firstDown === "pass right") || (secondDown === "run right" && firstDown === "pass left" || firstDown === "pass right")) {
    //if(firstDown === "pass left" || firstDown === "pass right"){
    console.log('3rd and 7.');
} else if((secondDown === "pass left" && firstDown === "pass left" || firstDown === "pass right") || (secondDown === "pass right" && firstDown === "pass left" || firstDown === "pass right")) { 
    //if(firstDown === "pass left" || firstDown === "pass right"){ 
    console.log('3rd and 8.');
} else if((secondDown === "pass left" && firstDown === "run left" || firstDown === "run right") || (secondDown === "pass right" && firstDown === "run left" || firstDown === "run right")) {
    //if(firstDown === "run left" || firstDown === "run right"){
    console.log('3rd and 2.');
} else console.log("3rd and long. Choose your next play.");

let thirdDown = readlineSync.question( "3rd down :| run left | pass left | run right | pass right |: " );

switch(thirdDown) {
    case "run left":
    case "run right":
    console.log('This could be a huge gain...');
    break;
    case "pass left":
    case "pass right":
    console.log("There's a player open...");
    break;
    default:
    console.log('Penalty: Delay of game. 5 yard penalty. Repeat 3rd down.');
};
if(((thirdDown === "run left" && secondDown === "run left" || secondDown === "run right" && firstDown === "run left" || firstDown === "run right")) || ((thirdDown === "run right" && secondDown === "run right" || secondDown === "run left" && firstDown === "run right" || firstDown === "run left"))) { 
//if(thirdDown === "run left" || thirdDown === "run right"){
    //if(secondDown === "run left" || secondDown === "run right"){
        //if(firstDown === "run left" || firstDown === "run right"){ 
console.log("Oh no! Your running back fumbled the ball. The opposing team scooped up the fumble and ran it back for a touchdown. Game Over. You lose.");
        //}
    //}
} else if(((thirdDown === "pass left" && secondDown === "pass left" || secondDown === "pass right" && firstDown === "pass left" || firstDown === "pass right")) || ((thirdDown === "pass right" && secondDown === "pass right" || secondDown === "pass left" && firstDown === "pass right" || firstDown === "pass left"))) { 
 
//else if(thirdDown === "pass left" || thirdDown === "pass right"){
    //if(secondDown === "pass left" || secondDown === "pass right"){
        //if(firstDown === "pass left" || firstDown === "pass right"){ 
console.log("Wow! Your player broke free over the middle of the field. No one in front of him. Touchdown!!! Congratulations! You win the Bowl Super Game!");
        //}
    //}
} else console.log('You moved the chains. First Down!');
