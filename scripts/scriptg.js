var x = 1;
var txt = document.getElementById("txt");
var pic = document.getElementById("pic");

function prev()
{
    x--;
    if(x<1) x = 10;
    txt.innerHTML = "p"+x+".jpg";
    pic.src = "pics/p"+x+".jpg";
}

function next()
{
    x++;
    if(x>10) x = 1;
    txt.innerHTML = "p"+x+".jpg";
    pic.src = "pics/p"+x+".jpg";
}