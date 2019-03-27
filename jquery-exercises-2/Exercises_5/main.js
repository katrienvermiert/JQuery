// Write your solution here
$("#name").focusin(function(){
    $("#name").css('border', '3px solid green');
});

$("#name").focusout(function(){
    $("#name").css('border', '3px solid red');
});

$("#first_name").focusin(function(){
    $("#first_name").css('border', '3px solid green');
});

$("#first_name").focusout(function(){
    $("#first_name").css('border', '3px solid red');
});

/* shorter: 
$("input").focusin(function(){
    $(this).css(.....)
}) 
$("input").focusout(function(){
    $(this).css(.....)
}) */