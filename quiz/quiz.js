//Start back where the var "question_2 is"
function start() {
	var question_1 = prompt("What is Talon's favorite animal?");
	if(question_1 === "cat") {
		confirm("You are right!");
		var question_2 = prompt("Why does Talon Code?")	
		if (question_2 === "I like to make things") {
		 		confirm("You are right again!");
		 		var question_3 = prompt("What job does Talon have?");
				if (question_3 === "a student") {
					confirm("You are right once again");	
						var question_4 = prompt("What school subject is Talon best in?");
						if (question_4 === "math") {
						confirm("Yay, you're right; I'm getting tired of you winning");
							var question_5 = prompt("How old is Talon?");
							if (question_5 === "12") {
							confirm("You won the game! Collect your prize by pressing OK.");
							document.location.href = 'https://pvpgamecrash.github.io/quiz/medal';
							}
							else {
							confirm("You lose! Come back next time!");
							}
					}
					else {
					confirm("Yes, I am so tired of this game, you lose!");
					document.location.href = 'https://pvpgamecrash.github.io';
					}
				}
				else {
				confirm("You are wrong, you lose! Better luck next time");
		 		document.location.href = 'https://pvpgamecrash.github.io';				
				}
			}
			else {
		 		confirm("You are wrong, you lose! Better luck next time");
		 		document.location.href = 'https://pvpgamecrash.github.io';
		 	}
		}
	else {
		confirm("You are wrong, you lose! Better luck next time");
		document.location.href = 'https://pvpgamecrash.github.io';
	}
}
