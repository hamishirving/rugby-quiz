$(document).ready(function(){function n(){$(".dropcap").find("h2").text("Q"+c+".")}function e(){$(".question-text").find("p").text("new question")}function t(){$("#answers").find("input[type='radio']").each(function(){var n=[$(this).val()];console.log(n),$("label").each(function(){$(this).text(n)})})}function o(){var n=$("input[type='radio']:checked").val();console.log("Checked answer is "+n);var e=u[c-1].correctAnswer;console.log("Correct answer is "+e),n==e?s():r()}function s(){a(),$(".answer-form").hide(),$(".answer-form-success").show(),$(".btn-submit").hide(),$(".btn-next").css("display","inline-block")}function r(){$(".answer-form").hide(),$(".answer-form-incorrect").show(),$(".btn-submit").hide(),$(".btn-next").css("display","inline-block")}function a(){i++,console.log("Score is "+i),$(".score-2").text(i)}console.log("ready!");var i=0,c=1;n(),e(),t(),$(".btn-submit").on("click",function(){o()}),$("btn-next").on("click",function(){c++,console.log("Current question is "+c)});var u=[{questionNo:1,question:"In what country was Rugby Union first played?",answers:["South Africa","Australia","New Zealand","England"],correctAnswer:"England"},{questionNo:2,question:"What team is currently ranked number 1 in the IRB World rankings?",answers:["Argentina","Australia","New Zealand","South Africa"],correctAnswer:"New Zealand"},{questionNo:3,question:"In what year will the next Rugby World Cup be played?",answers:["2015","2016","2017","2018"],correctAnswer:"2015"},{questionNo:4,question:"In what country was Rugby Union first played?",answers:["South Africa","Australia","New Zealand","England"],correctAnswer:"England"},{questionNo:5,question:"In what country was Rugby Union first played?",answers:["South Africa","Australia","New Zealand","England"],correctAnswer:"England"}]});