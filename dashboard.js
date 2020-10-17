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
    modal.addEventListener("submit",gettransaction);
}
function gettransaction(){
    event.preventDefault();
    var len=JSON.parse(localStorage.user);
    var modal=new FormData(event.target);
    var title=modal.get("title");
    var type=modal.get("type");
    var amount =modal.get("amount");
    for(var i=0;i<len.length;i++){
        if(len[i].email==localStorage.active){    
          len[i].transaction.push({title:title,type:type,amount:amount,timestamp:Date()});
          localStorage.setItem("user",JSON.stringify(len));
          console.log(len[i].transaction);
        }
    }
    
}