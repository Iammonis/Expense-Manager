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

function login(){
    event.preventDefault();
    var form=new FormData(event.target);
    var email=form.get("l-email");
    var password=form.get("l-password");
    var acde=document.getElementById("accDExist");
    var wp=document.getElementById("wp");
    let getData  = localStorage.getItem(email);
    getData = JSON.parse(getData)

    if(localStorage[email] && password == getData.password){
      location.assign("dash.html");
    }
    else if(!localStorage[email]){
      acde.style.display="block";
     setTimeout(function(){
      acde.style.display="none";
     },5000);
    }
    else if( password != getData.password ){
      wp.style.display="block";
     setTimeout(function(){
      wp.style.display="none";
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
        data=JSON.stringify(data);
        localStorage.setItem(email,data);
       
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