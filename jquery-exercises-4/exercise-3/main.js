$("button").click(function(){
    //validate name
    let name = $("#name").val();
    let letterRegex = /^[A-Za-z][a-z-]*$/; //letters and dash only
    if(!letterRegex.test(name)){
        $("#namecheck").html('Please only use letters and dashes');
    } else {
        $("#namecheck").html('valid name')
    };


    //validate first name
    let fname = $("#fname").val();
    if(!letterRegex.test(fname)){
        $("#fnamecheck").html('Please only use letters and dashes');
    } else {
        $("#fnamecheck").html('valid first name')
    };

    //validate e-mail
    let mail = $("#mail").val();
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; //match e-mail address
    if(!emailRegex.test(mail)){
        $("#mailcheck").html('Please enter valid e-mail address');
    } else {
        $("#mailcheck").html('valid e-mail address')
    };

    //validate phone number
    let phone = $("#phone").val();
    let intRegex = /^[0-9]{10}$/;  //select integers only
    if(!intRegex.test(phone) || phone.length != 10){
        $("#phonecheck").html('Please enter valid phone number(only numbers)');
    } else {
        $("#phonecheck").html('valid phone number')
    };
})

