
    $(document).keydown(function(e){
        switch (e.which){
            case 37:
            $(".square").css({
                left: "-=10"
            });
            break;

            case 38:
            $(".square").css({
                top: "-=10"
            });
            break;

            case 39:
            $(".square").css({
                left: "+=10"
            });
            break;

            case 40:
            $(".square").css({
                top: "+=10"
            });
            break;
        };
    });


