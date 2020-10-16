window.addEventListener("load",function(){
var form=document.querySelector("form");
form.addEventListener("submit",update);
});
function update(){
    event.preventDefault();
    var form=new Formdata(event.target);
    
}