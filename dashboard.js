window.addEventListener("load",function(){
if(!localStorage.active){
location.assign("index.html");
}
var logout=document.getElementById("log-out");
logout.addEventListener("click",clear);
var add=document.getElementById("add-trans");
add.addEventListener("click",transinput);
var closemod=document.getElementById("close-modal");
closemod.addEventListener("click",closetr);
var len=JSON.parse(localStorage.user);
var income=0;
var expense=0;
for(var a=0;a<len.length;a++){
   
    if(len[a].email==localStorage.active){
      

        for(var b=0;b<len[a].transaction.length;b++){
            if(len[a].transaction[b].type=="credit"){
                income=Number(len[a].transaction[b].amount)+income;
            }
        }
     var inc=document.querySelector("#income p");
     inc.textContent="Rs "+income;
    }

}
for(var a=0;a<len.length;a++){
   
    if(len[a].email==localStorage.active){
      

        for(var b=0;b<len[a].transaction.length;b++){
            if(len[a].transaction[b].type=="debit"){
                expense=Number(len[a].transaction[b].amount)+expense;
            }
        }
     var inc=document.querySelector("#expense p");
     inc.textContent="Rs "+expense;
    }

}
var balance=income-expense;
var bal=document.querySelector("#balance p");
bal.textContent="Rs "+balance;

for(var k=0;k<len.length;k++){
if(len[k].email==localStorage.active){
var table=document.querySelector("tbody");
for(var m=0;m<5;m++){
    if(len[k].transaction[m]){
        var tr=document.createElement("tr");
        var title=document.createElement("td");
        title.textContent=len[k].transaction[m].title;
    
        var type=document.createElement("td");
        type.textContent=len[k].transaction[m].type;
    
        var amount=document.createElement("td");
        amount.textContent=len[k].transaction[m].amount;
    
        var timestamp=document.createElement("td");
        timestamp.textContent=len[k].transaction[m].timestamp;
    
        tr.prepend(title,type,amount,timestamp);
        table.prepend(tr);
          }
   
       }  
   }
}
function closetr(){
    var modal=document.getElementById("modal");
    modal.style.display="none";
}
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
    var date =Date();
    date = date.split("GMT")
    date = date[0]
    console.log(date)
    for(var i=0;i<len.length;i++){
        if(len[i].email==localStorage.active){    
    
          len[i].transaction.push({title:title,type:type,amount:amount,timestamp:date});
          localStorage.setItem("user",JSON.stringify(len));

        }
    }
    var modal=document.getElementById("modal");
    modal.style.display="none";
}