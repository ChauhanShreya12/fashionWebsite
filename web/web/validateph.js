var f=document.querySelector("form");
var a=f.elements[8];
function validate(){
    if(document.querySelectorAll(".c2").value==0 || !document.querySelectorAll("#i1").checked){
        alert("fill all details");
        return 0;
    }
    else if(f.phn.value.match(/^([0-9]{1,9})$/)){
        alert("Enter your phone number");
        return 0;
    }
    else{
        window.open("home.html");
    }
}
a.onclick=validate;