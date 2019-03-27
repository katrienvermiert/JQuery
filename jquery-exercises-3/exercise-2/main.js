let count = 0;

$("#plus").click(function(){
    count++;
    $("#counter").html(count);
})

$("#minus").click(function(){
    count--;
    $("#counter").html(count);
})