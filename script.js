var add_btn = document.getElementById("add_btn");
var div = document.querySelector(".model")
var remove = document.querySelector(".cross");
add_btn.addEventListener("click",()=>{
    div.style.display = "flex";
})
remove.addEventListener("click",()=>{
    div.style.display = "none";
})