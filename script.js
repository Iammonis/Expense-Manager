window.addEventListener("load",function(){
    let login=document.getElementById("login");
    let register=document.getElementById("register");
    let logform=document.getElementById("logForm");
    let regform=document.getElementById("regForm");
    login.addEventListener("click",log);
    register.addEventListener("click",reg);
    logform.addEventListener("submit",login1);
    regform.addEventListener("submit",register1);
});

function login1(){
    event.preventDefault();
    var form=new FormData(event.target);
    var email=form.get("l-email");
    var password=form.get("l-password");
    var p=document.createElement("p");
    var body=document.createElement("body");
    
    if(localStorage[email]){
      location.assign("dash.html");
    }
    else{
        p.textContent=`${email}Account doesnt exist`
        body.append(p);
    }
}
function register1(){
    event.preventDefault();
    var form=new FormData(event.target);
    var name=form.get("name");
    var email=form.get("r-email");
    var password=form.get("r-password");
    console.log(name);
    console.log(email);
        var data={name:name,email:email,password:password};
        data=JSON.stringify(data);
        localStorage.setItem(email,data);
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