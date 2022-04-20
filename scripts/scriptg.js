var x = 1;
var y = 1;
var txtP = document.getElementById("txt");
var txtV = document.getElementById("txtV");
var pic = document.getElementById("pic");
var vid = document.getElementById("vid");

function prev(type)
{
    if(type=="pic")
    {
        x--;
        if(x<1) x = 10;
        txtP.innerHTML = "p"+x+".jpg";
        pic.src = "pics/p"+x+".jpg";
    }
    else if(type=="vid")
    {
        y--;
        if(y<1) y = 9;
        txtV.innerHTML = "v"+y+".mp4";
        vid.src = "pics/v"+y+".mp4";
    }
}

function next(type)
{
    if(type=="pic")
    {
        x++;
        if(x>10) x = 1;
        txtP.innerHTML = "p"+x+".jpg";
        pic.src = "pics/p"+x+".jpg";
    }
    else if(type=="vid")
    {
        y++;
        if(y>9) y = 1;
        txtV.innerHTML = "v"+y+".mp4";
        vid.src = "pics/v"+y+".mp4";
    }
}

$(document).ready(function(){
    $("#cmi").animate({opacity:'100'}, 15000);
});
