window.addEventListener("load",function(){
    let loginV=document.getElementById("login");
    let registerV=document.getElementById("register");
    let logform=document.getElementById("logForm");
    let regform=document.getElementById("regForm");

    loginV.addEventListener("click",log);
    registerV.addEventListener("click",reg);
    logform.addEventListener("submit",login);
    regform.addEventListener("submit",register);
    
});
var p=document.createElement("p"); 
    var form=document.getElementById("register-form");
    form.append(p);
function login(){
    event.preventDefault();
    var form=new FormData(event.target);
    var email=form.get("l-email");
    var password=form.get("l-password");
    var acde=document.getElementById("accDExist");
    var wp=document.getElementById("wp");
    let getData  = localStorage.getItem("users");
    getData = JSON.parse(getData);
    let count=0;
    for(let i=0; i<getData.length; i++){
      if(getData[i].email == email)
      {
        if(password == getData[i].password)
        {
          location.assign("dash.html");
        }
        else{
          wp.style.display="block";
           setTimeout(function(){
            wp.style.display="none";
           },5000);
        }
      }
      else{
        count++;
      }
    }
    if(getData.length == count){
      acde.style.display="block";
      setTimeout(function(){
        acde.style.display="none";
      },5000);
    }

}
function register(){
    event.preventDefault();
    var form=new FormData(event.target);
    var name=form.get("name");
    var email=form.get("r-email");
    var password=form.get("r-password");
 
        var data={name:name,email:email,password:password};
       
        if(localStorage.user){
          var obj=localStorage.getItem("user");
          obj=JSON.parse(obj);
          for(i=0;i<obj.length;i++){
            if(obj[i].email==data.email){
              
             
              p.textContent="User Already Exist!";
             
             
            }
           else{
            obj.push(data);
            localStorage.setItem("user",JSON.stringify(obj));
           }
          }
         
         
        }
        else{
          localStorage.setItem("user","[]");
          var obj=localStorage.getItem("user");
          obj=JSON.parse(obj);
          obj.push(data);
          localStorage.setItem("user",JSON.stringify(obj));
        }
        
       
}

function reg(){
var regDiv=document.getElementById("register-form");
var logDiv=document.getElementById("login-form");
var regBtn=document.getElementById("register");
var logBtn=document.getElementById("login");

logDiv.style.display="none";
regDiv.style.display="block";
logBtn.style.cursor="pointer";
regBtn.style.cursor="default";
regBtn.style.background="var(--active)";
logBtn.style.background="var(--not-active)";
regBtn.style.color="#000";
logBtn.style.color="rgba(0, 0, 0, 0.5)";

}
function log(){
var regDiv=document.getElementById("register-form");
var logDiv=document.getElementById("login-form");
var regBtn=document.getElementById("register");
var logBtn=document.getElementById("login");

logDiv.style.display="block";
regDiv.style.display="none";
logBtn.style.cursor="default";
regBtn.style.cursor="pointer";
logBtn.style.background="var(--active)";
regBtn.style.background="var(--not-active)";
logBtn.style.color="#000";
regBtn.style.color="rgba(0, 0, 0, 0.5)";
}