$("#btn1").click(function(){
   $("#rect").height('+=10px');

   if($("#rect").height() > 100){
       $("#rect").height('10px');
   };

});

$("#btn2").click(function(){
   $("#rect").css('background-color', 'green')

});

$("#btn3").click(function(){
    $("#rect").css('background-color', '')

});

$("#btn4").click(function(){
    $("#rect").hide()

});

$("#btn5").click(function(){
    $("#rect").show()

});