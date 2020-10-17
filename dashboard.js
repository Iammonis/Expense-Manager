window.addEventListener("load",function(){
if(!localStorage.active){
location.assign("index.html");
}
var logout=document.getElementById("log-out");
logout.addEventListener("click",clear);
var modal=document.getElementById("modal");
modal.addEventListener("click",transinput);
});
function clear(){
    localStorage.setItem("active","");
    location.assign("index.html");
}
function transinput(){
    var modal=document.getElementById("modal");
    modal.Style.display="block";
}