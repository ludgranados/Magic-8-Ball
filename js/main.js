 // Answers to the questions being asked
 var answers = ["Yup",
 "It is decidedly so",
 "Without a doubt",
 "Definitely yeah",
 "Sure will",
 "Uuuuuummmm, yeah",
 "Probably",
 "Outlook is good",
 "Yes", "Signs point to yes",
 "I think it not",
 "My reply is nah",
 "My sources say nah",
 "Outlook is not so good",
 "Highly doubtful",
 "Lookin hazy, try again",
 "Ask again later",
 "Wouldn't you like to know",
 "Prediction is not able to be made now",
 "Focus and type your question again"];

window.onload = function() {
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {
if (question.value.length < 1) {
alert('Enter your question, then click the 8 on the ball!!');
} else {
eight.innerText = "";
var num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};