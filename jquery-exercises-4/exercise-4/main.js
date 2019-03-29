$("button").click(function(){
    let name = $("#name").val();
    let fname = $("#fname").val();
    let bday = $("#bday").val();
    let birthplace = $("#birthplace").val();
    let work = $("#work").val();
    let company = $("#comp").val();

    $("#output").html(`${fname} ${name} was born in ${birthplace} on ${bday}. He/she works as a/an ${work} at ${company}.`)
})