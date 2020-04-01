const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const resultText =document.getElementById("result");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

if(mostRecentScore==50){
  resultText.innerText = "Perfect score!";
  finalScore.innerText =`You Scored : ${mostRecentScore}/50`;
}
else if(mostRecentScore==40){
  resultText.innerText = "Awesome job, you got most of them right.";
  finalScore.innerText =`You Scored : ${mostRecentScore}/50`;
}
else if(mostRecentScore==30){
  resultText.innerText = "Pretty good, we'll say that's a pass.";
  finalScore.innerText =`You Scored : ${mostRecentScore}/50`;
}
else if(mostRecentScore==20){
  resultText.innerText = "Well, at least you got some of them right!";
  finalScore.innerText =`You Scored : ${mostRecentScore}/50`;
}
else if(mostRecentScore==10){
  resultText.innerText = "Looks like this was a tough one, better luck next time.";
  finalScore.innerText =`You Scored : ${mostRecentScore}/50`;
}
else{
  resultText.innerText = "Yikes, none correct. Well, maybe it was rigged?";
  finalScore.innerText =`You Scored : 0/50`;
}


// username.addEventListener("keyup", () => {
//   saveScoreBtn.disabled = !username.value;
// });

// saveHighScore = e => {
//   console.log("clicked the save button!");
//   e.preventDefault();

//   const score = {
//     score: Math.floor(Math.random() * 100),
//     name: username.value
//   };
//   highScores.push(score);
//   highScores.sort((a, b) => b.score - a.score);
//   highScores.splice(5);

//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   window.location.assign("/");
// };
