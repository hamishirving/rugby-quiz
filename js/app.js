$( document ).ready(function() {

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

    // Global variables
    var score = 0;
    var currentQuestion = 0;
	var correct;
	var numberOfQuestions = questions.length;
	console.log("The number of questions is " + numberOfQuestions);
	resetPage();

	// On submit, evaluate answer
    $('.btn-submit').on('click', function() {
    	evaluateAnswer();
    })

    // Click next, reset page
    $('.btn-next').on('click', function() {
    	resetPage();
    })

    // Reset page and populate question and answers
    function resetPage() {
        currentQuestion++;
    	if (currentQuestion <= numberOfQuestions) {
	    	setQuestionNumber();
		    setQuestion();
		    setAnswers();
			$('.answer-form').show();
			$('.answer-form-incorrect').hide();
			$('.answer-form-success').hide();
			$('.btn-submit').show();
			$('.btn-next').hide();	
    	} else {
			$('.answer-form-incorrect').hide();
			$('.answer-form-success').hide();
			$('.btn-submit').hide();
			$('.btn-next').hide();
    		quizComplete();
    	}
	}

    function setQuestionNumber() {
    	// $('.dropcap').show();
    	$('.dropcap').find('h2').text('Q' + currentQuestion + '.');
    }

	// Set question on page
	function setQuestion() {
		// Set current question from questions array at index [currentQuestion - 1]
		$('.question-text').find('p').text(questions[(currentQuestion - 1)].question);
	}

	// Set answers on page
	function setAnswers() {
		// Get the answers for the current question
		var currentAnswers = questions[(currentQuestion - 1)].answers;
		console.log('Current answer list is ' + currentAnswers);

		// TODO - Set value ( <input value=""> ) of each input to answer from answers object
		for (var i = 0; i <= (numberOfQuestions - 2); i++) {
			$('input').val(currentAnswers);
			console.log("Value " + i + " is " + currentAnswers[i]);
		}

		// TODO - Set the label of each answer to answer from answers object
		for (var i = 0; i <= (numberOfQuestions - 2); i++) {
			$('#answers label').text(currentAnswers[i]);
			console.log("Answer " + i + " is " + currentAnswers[i]);
		}
	}

	function evaluateAnswer() {
		var selectedAnswer = $("input[type='radio']:checked").val();
		console.log("Checked answer is " + selectedAnswer);
		// Correct answer taken from questions array at index [currentQuestion -1]
		var correct = questions[(currentQuestion - 1)].correctAnswer;
		console.log("Correct answer is " + correct);
		// If selected answer is equal to correct answer
		if (selectedAnswer == correct) {
			score++;
			isCorrect();
		} else {
			isIncorrect();
		}
	}

	function isCorrect() {
		updateScore();
		$('.answer-form').hide();
		$('.answer-form-success').show();
		$('.btn-submit').hide();	
		$('.btn-next').css("display","inline-block");
	}

	function isIncorrect() {
		$('.answer-form').hide();
		$('.answer-form-incorrect').show();
		$('.btn-submit').hide();
		$('.btn-next').css("display","inline-block");
	}

	function updateScore() {
		// increment scrore by 1
		console.log('Score is ' + score);
		// set score
		$('.score-2').text(score);

	}

	function quizComplete() {
		console.log('Quiz complete');
		$('.dropcap').hide();
		$('.question-text').attr({"id":"again-text"});
		$('.question-text').text("You got " + score + " out of " + numberOfQuestions + ", would you like to try again?");
		$('.btn-again').css("display", "inline-block");
		$('.btn-again').on('click', function() {
			startOver();
		})
	}

	function startOver() {
		$('.btn-again').hide();
		$('.question-text').empty();
		// Reset global variables
	    score = 0;
	    currentQuestion = 0;
	    // Start again
		updateScore();
	    resetPage();
	}
});