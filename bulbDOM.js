let a=document.querySelector("div");
let b=document.querySelector("button")
let c=0;
b.addEventListener("click",function(){
    c++;
    if(c%2!=0){
a.style.backgroundColor="yellow";
    }
    else{
        a.style.backgroundColor="transparent";
    }
});