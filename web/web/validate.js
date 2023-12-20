var f1=document.querySelector("form");
var f2=document.querySelector(".f2");
var a=document.querySelector("#i1");
var b=document.querySelector("#i2");

function validate1(){
    if(f1.user.value==0 || f1.pwd1.value==0){
        alert("Fill all details");
        location.reload();
        return 0 ;
    }
    else if(f1.user.value.match(/^([A-z 0-9]{0,6})@gmail.com$/)){
        alert("Not valid Email");
        location.reload();
        return 0;
    }
    else if(f1.pwd1.value.match(/^([A-z 0-9]{0,8})$/)){
        alert("Incorrect password");
        location.reload();
        return 0;
    }
    else{
        window.open("index.html");
    }
}
function validate2(){
    if(f2.n1.value==0 || f2.m1.value==0 || f2.pwd.value==0 || f2.cpw.value==0){
        alert("Fill all details");
        return 0;
    }
    else if(f2.n1.value.match("[0-9]")){
        alert("Please Enter Name again");
        return 0;
    }
    else if(f2.m1.value.match(/^([A-z 0-9]{0,6})@gmail.com$/)){
        alert("Enter Valid Email Id");
        return 0;
    }
    else if(f2.pwd.value.match(/^([A-z 0-9]{0,8})$/)){
        alert("Enter stronger password");
        return 0;
    }
    else if(f2.pwd.value!=f2.cpw.value){
        alert("Not the same password");
        return 0;
    }
    else if(!f2.ch.checked){
        alert("Accept the Terms and Conditions");
        return 0;
    }
    else{
        window.open("address.html");
    }
}
a.onclick=validate1;
b.onclick=validate2;
