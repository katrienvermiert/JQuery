let bold = 0;
let underline = 0;

$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:first-child").click(function(){
        $("body").css('font-size', '120%');
    });
    
    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").click(function(){
        $("body").css('font-size', '80%');
    });
    
    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").click(function(){
        if (bold == 0){
            $(".green").css('font-weight', 'bold');
            bold++;
        } else {
            bold = 0;
            $(".green").css('font-weight', 'normal');
        }
    });
    
    /* On click: underline or normalize the green words */
    $("ol li:nth-child(4)").click(function(){
        if (underline == 0){
            $(".red").css('text-decoration', 'underline');
            underline++;
        } else {
            underline = 0;
            $(".red").css('text-decoration', 'none');
        }
    });
    
    /* On click: Replace the logo with another image */
    $("ol li:nth-child(5)").mouseover(function(){
        $("img").attr('src', 'images/koala.jpg');
    })
    $("ol li:nth-child(5)").mouseout(function(){
        $("img").attr('src', 'images/jquery-logo.png');
    })
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").mouseover(function(){
        $(this).attr('title', $(this).attr('href'));
    });
    
    
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("ol li:nth-child(7)").click(function(){
         $("img").after("<h2>Chapter One:</h2>");
        $("p:nth-child(5)").after("<h2>Chapter Two:</h2>");
    })
   
});