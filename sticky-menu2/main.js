

$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");

        }

    })



 /* 
    $(".service").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");

        }
        else{
            $("nav").removeClass("sticky");

        }

    });
    */
});