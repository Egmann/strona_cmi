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
var y = 1;
var txtV = document.getElementById("txtV");
var vid = document.getElementById("src");
const v = document.getElementById("vid");

function prevV()
{
    y--;
    if(y<1) y = 10;
    txtV.innerHTML = "v"+y+".mp4";
    vid.src = "pics/v"+y+".mp4";
    v.load();
    v.play();
}

function nextV()
{
    y++;
    if(y>10) y = 1;
    txtV.innerHTML = "v"+y+".mp4";
    vid.src = "pics/v"+y+".mp4";
    v.load();
    v.play();
}