$( document ).ready(function() {
    console.log( "ready!" );

    var score = 00;

    $('.btn-submit').on('click', function() {
    	evaluateAnswer();
    })

	// Set questions on page

	// Set answers on page

	// Get selected answer

	function evaluateAnswer() {
		var selectedAnswer = $("input[type='radio']:checked").val();
		console.log("Checked answer is " + selectedAnswer);

		// if result is equal to correctAnswer
		// if (selectedAnswer =  )
			// isCorrect();
		// else 
			// isIncorrect();
		var correct1 = questions[0].correctAnswer;
		console.log("Correct ansswer is " + correct1);
		// if 
	}

	function isCorrect() {
		// increment scrore by 1
		// show correct message
		// show next button
	}

	function isIncorrect() {
		// show incorrect message
		// show next button
	}

	// Questions

	var questions = [{
		question: "In what country was Rugby Union first played?",
		answers: ["South Africa", "Australia", "New Zealand", "England"],
		correctAnswer: "England"
	},
	{
		question: "What team is currently ranked number 1 in the IRB World rankings?",
		answers: ["Argentina", "Australia", "New Zealand", "South Africa"],
		correctAnswer: "New Zealand"
	},
	{
		question: "In what year will the next Rugby World Cup be played?",
		answers: ["2015", "2016", "2017", "2018"],
		correctAnswer: "2015"
	},
	{
		question: "In what country was Rugby Union first played?",
		answers: ["South Africa", "Australia", "New Zealand", "England"],
		correctAnswer: "England"
	},
	{
		question: "In what country was Rugby Union first played?",
		answers: ["South Africa", "Australia", "New Zealand", "England"],
		correctAnswer: "England"
	}]

});

