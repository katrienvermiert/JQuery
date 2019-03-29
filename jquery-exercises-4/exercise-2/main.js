let selectedChild = 0;
let selectedGender ;

$('#gen').change(function(){
    selectedGender = $(this).children('option:selected').val();
   
})

$('#child').change(function(){
    selectedChild = $(this).children('option:selected').val();
    
})


function input(){
    let salary = $("#sal").val();

    let expenses = (salary/100) * 18;
    let insurance = (salary/100) * 7;
    let contributions = (salary/100) * 5;

    let subtotal = salary - (expenses + insurance + contributions);
    return subtotal;
    
};


$("#calc").click(function() {
    input();
    let total ; 
    let answer;

    if(selectedGender == 'Male' && selectedChild == 0){
        total = input();
        answer ='salary after taxes and discount: ' + total + ' €';
    }else if(selectedGender == 'Male' && selectedChild == 3){
        total = input() + ((input()/100) * 1);
        answer ='salary after taxes and discount: ' + total + ' €';
    }else if(selectedGender == 'Male' && selectedChild == 4){
        total = input() +((input()/100) * 2);
        answer ='salary after taxes and discount: ' + total + ' €';
    }else if(selectedGender == 'Female' && selectedChild == 0){
        total = input() + ((input()/100) * 2);
        answer ='salary after taxes and discount: ' + total + ' €';
    }else if(selectedGender == 'Female' && selectedChild == 3){
        total = input() + ((input()/100) * 3);
        answer ='salary after taxes and discount: ' + total + ' €';
    }else if(selectedGender == 'Female' && selectedChild == 4){
        total = input() +((input()/100) * 4);
        answer ='salary after taxes and discount: ' + total + ' €';
    }else {
        answer ='Error!'
    };
    $('#output').html(answer);
    event.preventDefault();
// Or instead of setting button type, you can also set this prevenDefault code to the function force stop going back to default
   
});
