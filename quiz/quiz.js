//Start back where the var "question_2 is"
function start() {
	var question_1 = prompt("What is Talon's favorite animal?");
	if(question_1 === "cat") {
		confirm("You are right!");
		var question_2 = prompt("Why does Talon Code")	
		if (question_2 === "He likes to make things") {
		 		confirm("You are right again!");
		 	}
		 	else {
		 		alert("You are wrong, you lose! Better luck next time");
		 		document.location.reload();
		 	}
		}
	else {
		alert("You are wrong, you lose! Better luck next time");
		document.location.reload();
	}
}
