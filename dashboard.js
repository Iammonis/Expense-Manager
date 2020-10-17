window.addEventListener("load",function(){
if(!localStorage.active){
location.assign("index.html");
}
var logout=document.getElementById("log-out");
logout.addEventListener("click",clear);
});
function clear(){
    localStorage.setItem("active","");
    location.assign("index.html");
}