let span_name=document.querySelector("#name");
span_name.innerHTML=localStorage.getItem("name");

let easy_button=document.querySelector("#easy");
let intermediate_button=document.querySelector("#intermediate");
let advance_button=document.querySelector("#advance");
let previous_button=document.querySelector("#previous");

easy_button.addEventListener("click",function(e){
    location.assign("/easy");
})
intermediate_button.addEventListener("click",function(e){
    location.assign("/intermediate");
})
advance_button.addEventListener("click",function(e){
    location.assign("/advance");
})
previous_button.addEventListener("click",function(e){
    location.assign("index");
})