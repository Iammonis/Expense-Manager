window.addEventListener("load",function(){
    var login=document.getElementById("login");
    var register=document.getElementById("register");
    login.addEventListener("click",log);
    register.addEventListener("click",reg);
    var logform=document.getElementById("logForm");
    logform.addEventListener("submit",login);
    var regform=document.getElementById("regForm");
    regform.addEventListener("submit",register);
});

function login(){
    event.preventDefault();
    var form=new FormData(event.target);
    var email=form.get("l-email");
    var password=form.get("l-password");
    var p=document.createElement("p");
    var body=document.createElement("body");
    
    if(localStorage.email){
      location.assign(dash.html);
    }
    else{
        p.textContent=`${email}Account doesnt exist`
        body.append(p);
    }
}
function register(){
    event.preventDefault();
    var form=new FormData(event.target);
    var name=form.get("name");
    var email=form.get("r-email");
    var password=form.get("r-password");
    var p=document.createElement("p");
    var body=document.createElement("body");
    console.log(name);
    console.log(email);
        var data={name:name,email:email,password:password};
        data=JSON.stringify(data);
        localStorage(email,data);
}
function reg(){
var regdiv=document.getElementById("register-form");
var logdiv=document.getElementById("login-form");
logdiv.style.display="none";
regdiv.style.display="block";
}
function log(){
var regdiv=document.getElementById("register-form");
var logdiv=document.getElementById("login-form");
logdiv.style.display="block";
regdiv.style.display="none";
}