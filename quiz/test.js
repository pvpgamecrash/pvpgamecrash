(function(global) {
	var questions = [{"What is Talon's favorite animal?":"cat"},
					 {"What does Talon code?":"javascript"}],
		q = questions.length,
		qa,
		question,
		score = 0;
	while(q--) {
		qa = questions[q];
		for(question in qa) {
			if(prompt(question)===qa[question]) {
				confirm('You are right!');
				score++;
			}
			else {
				confirm("You are wrong, you lose! Better luck next time");
				document.location.href = 'https://pvpgamecrash.github.io';
			}
		}
		if(score === questions.length) {
			document.location.href = 'https://pvpgamecrash.github.io/quiz/medal';
		}
	}
})(window)
