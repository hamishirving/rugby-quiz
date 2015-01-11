$( document ).ready(function() {
    console.log( "ready!" );

    // Global variables
    var score = 0;
    var currentQuestion = 1;

    // Populate quesion and answers
    setQuestionNumber();
    setQuestion();
    setAnswers();

    $('.btn-submit').on('click', function() {
    	evaluateAnswer();
    })

    $('btn-next').on('click', function() {
    	currentQuestion++;
    	console.log('Current question is ' + currentQuestion);
    	// setQuestion();

    })

    function setQuestionNumber() {
    	$('.dropcap').find('h2').text('Q' + currentQuestion + '.');
    	// $(this).text(currentQuestion);
    }

	// Set question on page
	function setQuestion() {
		// currentQuestion++;
		// console.log('Current question number is ' + currentQuestion);

		// Get question from list of questions
		// var bob = questions[0].correctAnswer;
		// console.log('This question is ' + questions[0].correctAnswer);

		$('.question-text').find('p').text('new question');

	}

	// Set answers on page
	function setAnswers() {

		// Get the value of the input

		// Get the value from each input in answers

		$('#answers').find("input[type='radio']").each(function() {
			var inputValue = [$(this).val()];
			console.log(inputValue);
			// Set the value as the label for the answer
			// $('label').text(inputValue);
			$('label').each(function(index) {
				$(this).text(inputValue);
			})
		})

	}

	function evaluateAnswer() {
		var selectedAnswer = $("input[type='radio']:checked").val();
		console.log("Checked answer is " + selectedAnswer);
		// Correct answer taken from Questions array at index [currentQuestion -1]
		var correct = questions[(currentQuestion - 1)].correctAnswer;
		console.log("Correct answer is " + correct);
		// if result is equal to correctAnswer
		if (selectedAnswer == correct) {
			isCorrect();
		} else {
			isIncorrect();
		}
	}

	function isCorrect() {
		updateScore();
		// hide questions
		$('.answer-form').hide();
		// show correct message
		$('.answer-form-success').show();
		// hide submit button
		$('.btn-submit').hide();
		// show next button		
		$('.btn-next').css("display","inline-block");
	}

	function isIncorrect() {
		// hide questions
		$('.answer-form').hide();
		// show correct message
		$('.answer-form-incorrect').show();
		// hide submit button
		$('.btn-submit').hide();
		// show next button		
		$('.btn-next').css("display","inline-block");
		// show incorrect message
	}

	function updateScore() {
		// increment scrore by 1
		score++;
		console.log('Score is ' + score)
		// set score
		$('.score-2').text(score);
	}

	// Questions

	var questions = [{
		questionNo: 1,
		question: "In what country was Rugby Union first played?",
		answers: ["South Africa", "Australia", "New Zealand", "England"],
		correctAnswer: "England"
	},
	{
		questionNo: 2,
		question: "What team is currently ranked number 1 in the IRB World rankings?",
		answers: ["Argentina", "Australia", "New Zealand", "South Africa"],
		correctAnswer: "New Zealand"
	},
	{
		questionNo: 3,
		question: "In what year will the next Rugby World Cup be played?",
		answers: ["2015", "2016", "2017", "2018"],
		correctAnswer: "2015"
	},
	{
		questionNo: 4,
		question: "In what country was Rugby Union first played?",
		answers: ["South Africa", "Australia", "New Zealand", "England"],
		correctAnswer: "England"
	},
	{
		questionNo: 5,
		question: "In what country was Rugby Union first played?",
		answers: ["South Africa", "Australia", "New Zealand", "England"],
		correctAnswer: "England"
	}]

});