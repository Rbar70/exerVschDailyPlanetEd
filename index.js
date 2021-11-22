  
/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.
In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark

var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(isThereKryptonite, enemyName){
if (!isThereKryptonite)
{
    return "Superman beats " +enemyName+ ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
}
    }

var isThereKryptonite
for (var i=0; i< enemies.length; i++) {
    if (i%2=== 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function HowAttractedIsLoisLaneToMe () {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*11));
    //wasn't getting any 10 with 10 so i bumped it up to 11 seem to work now

}

console.log( HowAttractedIsLoisLaneToMe ()) ;

var clarkKent = true;
//missing this one awww need to add the =
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}
