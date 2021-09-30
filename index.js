var input = require("readline-sync");
var score=0;
var user=input.question("What's your name? ");
console.log("Welcome "+user+",Let's have some fun quiz(Quiz is having -ve marking) All The Best!");

function Quiz(Question,Answer){
  var userAnswer=input.question(Question);
    if(userAnswer===Answer){
    score+=1;
    console.log("Great!,Right Answer.");
  }
  else{
    score-=1;
    console.log("Sad!, Wrong answer.");
  }
}


Quiz("Who sent you this quiz? ","Himanshu");
Quiz("Which is his favorite Sports?", "Cricket");
Quiz("Where did he attend his first School?","Krishna Public School");
Quiz("Where is currently residing?","Kanina");
Quiz("When was he born(Year)?","IBM");
console.clear()
console.log("Thank You "+user+".\nYour Score is: "+score);