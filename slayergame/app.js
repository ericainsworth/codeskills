var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

console.log(youHit);
console.log(damageThisRound);

while(slaying) {
 if (youHit) {
    console.log("You hit the dragon");
    totalDamage += damageThisRound;
    if (totalDamage >= 4) {
     console.log("You beat the dragon!");
     slaying = false;
    }
    else {
      youHit = Math.floor(Math.random() * 2);
      console.log(youHit);
    }
 }
    else {
    console.log("The dragon beat your ass");
    slaying = false;
    }
}
