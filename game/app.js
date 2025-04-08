//variables for tracking user scores
let userScore =0;
let compScore =0;
//accessing the choices
const choices=document.querySelectorAll(".choice");
//access message
const msg = document.querySelector("#msg");
//access scores
const youSore = document.querySelector("#user-score");
const computerScore = document.querySelector("#comp-score");
//gen comp choice randomly
const genCompChoice = ()=>{
const options =["rock","paper","scissors"];
let randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}

//func fo draw game
const drawGame=()=>{
    console.log("draw");
    msg.innerText="Game Draw.Play again!";
    msg.style.backgroundColor = "rgb(242, 240, 239)";
};

//show winner
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        msg.innerText =`${userChoice} beats ${compChoice}.you Win!`;
        msg.style.backgroundColor ="green";
        userScore++;
        console.log("you:", userScore);
        youSore.innerText = userScore;

    }
    else{
    console.log("you loose");
    msg.innerText =`${compChoice} beats ${userChoice}.you loose!`;
    msg.style.backgroundColor ="red";
    compScore++;
    console.log("comp:", compScore);
    computerScore.innerText=compScore;
}};
//generates a random choice from comp and compares with user choice and updates score
const playGame=(userChoice) =>{
    console.log("choice clicked by user",userChoice);
    const compChoice=genCompChoice();
    console.log("choice clicked by computer",compChoice);
    //draw game
    if(userChoice===compChoice){
        drawGame();
    }else{
    let userWin =true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);}
     
};
//adding event listener for every choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    })

    }
);
