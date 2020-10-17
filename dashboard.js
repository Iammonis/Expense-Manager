window.addEventListener("load",function(){
if(!localStorage.active){
location.assign("index.html");
}
var logout=document.getElementById("log-out");
logout.addEventListener("click",clear);
var add=document.getElementById("add-trans");
add.addEventListener("click",transinput);
});
function clear(){
    localStorage.setItem("active","");
    location.assign("index.html");
}
function transinput(){
    var modal=document.getElementById("modal");
    modal.style.display="block";
}