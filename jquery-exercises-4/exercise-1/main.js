let userChoice ;

$("li").click(function(){
    userChoice = $(this).attr("id");
    $(this).css('color', 'red');
});



let computerChoice ;
let generator = Math.floor(Math.random() * 3) + 1;
switch (generator){
    case (1):
    computerChoice = "rock";
    break;

    case (2):
    computerChoice = "paper";
    break;

    case (3):
    computerChoice = "scissors";
    break;
};

$("#play"). click(function(){
    if((computerChoice == "rock" && userChoice == "scissors") || (computerChoice == "paper" && userChoice == "rock") || (computerChoice == "scissors" && userChoice == "paper")){
        $("#result").html("Computer Wins!");
    
    } else if ((computerChoice == "rock" && userChoice == "paper") || (computerChoice == "paper" && userChoice == "scissors") || (computerChoice == "scissors" && userChoice == "rock")){
        $("#result").html("You Win!");
    
    } else if (computerChoice == userChoice){
        $("#result").html("It's a tie!")
    }
});

