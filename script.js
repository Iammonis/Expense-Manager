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
    var email=form.get("L-email");
    var password=form.get("L-password");
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
    var email=form.get("R-email");
    var password=form.get("R-password");
    var p=document.createElement("p");
    var body=document.createElement("body");
    if(name.length>3 && password.length>5){
        var data={name:name,email:email,password:password};
        data=JSON.stringify(data);
        localStorage(email,data);
    }
    else{
        p.textContent=`Name should be mininmum 4 character
                      password should be minimum 6 characters`
        body.append(p);
    }
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