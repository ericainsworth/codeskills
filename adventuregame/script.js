var user = prompt("You're walking through the forest in Sumatra, minding your own business, and you run into a tiger! Do you FIGHT him, FEED him, or RUN?").toUpperCase();

switch(user) {
  case 'FIGHT':
  var tigerSlayer = prompt("Have you battled tigers before?(YES or NO)").toUpperCase();
  var tough = prompt("Are you tough?(YES or NO)").toUpperCase();
  if (tigerSlayer === 'YES' || tough === 'YES') {
    alert("You weren't lying, nice work! The tiger took off into the forest. It wanted no piece of you!");
  }
  else {
    alert("Seeing you're not tough and have no experience fighting tigers, you never stood a chance. You're tiger meat!");
  }
  break;
  case 'FEED':
  var food = prompt("Do you have any food on you right now?('YES' or 'NO')").toUpperCase();
  var foodType = prompt("Do you happen to have any meat? Skittles aren't going to work here.(YES or NO)").toUpperCase();
  if (food === 'YES' && foodType === 'YES') {
    alert('Good thing you had that old piece of jerky in your pocket. You distracted the tiger and were able to escape!');
  }
  else {
    alert("Too bad you ate that last piece of jerky 5 days ago because you just became jerky of the tiger");
  }
  break;
  case 'RUN':
  var fast = prompt("Lets try and get out of here then. Are you a fast runner?(YES or NO)").toUpperCase();
  var headStart = prompt("Can you get a headstart on the tiger?('YES' or 'NO')").toUpperCase();
  if (fast === 'YES' && headStart === 'YES') {
    alert('Hey you lost a shoe, but you were able to barely get away and will live another day');
  }
  else {
    alert('Simply being fast or only having a headstart is not enough to escape a from a hungry tiger. You never had a chance and are not very smart either lol');
  }
  break;
  default:
  alert('You did not choose an available option. Hit the refresh and this time pick either, FIGHT, FEED, or RUN.');
}
