var canva;

var contestant, contestantCount=0, database, quiz, question, allContestants;
var gameState=0;

function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if (contestantCount===4){
    quiz.update(1);
  }
  if (gameState===1){
    clear();
    quiz.play();
  }
}

