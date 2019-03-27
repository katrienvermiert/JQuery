let n = Math.floor(Math.random() * 100);
let count = 0;

$("#btn").click(function(){
    let userInput = Number($("#number").val());
    count++;

    if( userInput < n){
        $("#result").html('your number is too low');
    } else if( userInput > n){
        $("#result").html('your number is too high');
    } else {
        $("#result").html('congrats! you guessed right');
    }; 
    $("#attempts").html("attempt " + count);  
});

 