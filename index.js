window.onscroll = function() {scrollFunction()};
function scrollFunction(){
if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("big-navigation").style.background = "black";
    document.getElementById("big-header").style.color = "white";
    document.getElementById("link").style.color = "white";
    document.getElementById("link1").style.color = "white";
    document.getElementById("link2").style.color = "white";
    document.getElementById("link3").style.color = "white";
    document.getElementById("link4").style.color = "white";
    } else {
        document.getElementById("big-navigation").style.background = "#999999";
        document.getElementById("big-header").style.color = "black";
        document.getElementById("link").style.color = "black";
        document.getElementById("link1").style.color = "black";
        document.getElementById("link2").style.color = "black";
        document.getElementById("link3").style.color = "black";
        document.getElementById("link4").style.color = "black";
    }
}