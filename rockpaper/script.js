var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);

if(computerChoice <= 0.33) {
	computerChoice = "rock";
}
else if(computerChoice <= 0.66) {
	computerChoice = "paper";
}
else {
	computerChoice = "scissors";
}

console.log("User: " + userChoice);
console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2) {
	if(choice1 !=="rock" && choice1 !=="paper" && choice1 !=="scissors") {
		do {
			choice1= prompt("You did not choose an option listed. Choose either rock, paper or scissors");
			console.log("After incorrect entry: " + choice1);
		}
		while (choice1 !=="rock" && choice1 !=="paper" && choice1 !=="scissors");
	}

	if (choice1 === choice2) {
		var userChoice2=prompt("The result is a tie. Please choose again.");
		var computerChoice2 = Math.random();
		console.log("User choice after tie: " + userChoice2);
		console.log(computerChoice2);

		if(computerChoice2 <= 0.33) {
			computerChoice2 = "rock";
		}
		else if(computerChoice2 <= 0.66) {
			computerChoice2 = "paper";
		}
		else {
			computerChoice2 = "scissors";
		}
		console.log("Computer choice after tie: " + computerChoice2);
		return compare(userChoice2, computerChoice2);
	}
	else if(choice1 === "rock") {
		if(choice2 === "paper") {
			return "paper wins";
		}
		else {
			return "rock wins";
		}
	}
	else if(choice1 === "paper") {
		if(choice2 === "scissors") {
			return "scissors wins";
		}
		else {
			return "paper wins";
		}
	}
	else if(choice1 === "scissors") {
		if(choice2 === "rock") {
			return "rock wins";
		}
		else {
			return "scissors wins";
		}
	}
};

console.log(compare(userChoice, computerChoice));
