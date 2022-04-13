$(document).ready(function(){
    $("#headC").animate({opacity:'100'},1500,function(){
        $("#headM").animate({opacity:'100'},1500,function(){
            $("#headI").animate({opacity:'100'},1500, function(){
                $("#headrest").animate({opacity:'100'},1500, function(){
                    $("#headrest1").animate({opacity:'100'},1500, function(){
                        $("#headrest2").animate({opacity:'100'},1500)
                    });
                });
            });
        });
    });
    $("#lde").mouseenter($("#slide").animate({width:'toggle'},350));
    $("#lde").mouseleave($("#slide").animate({width:'toggle'},350));
})