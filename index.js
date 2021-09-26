const nav = document.querySelector("#nav");
console.log(nav)
const menu = document.querySelector("#menu")
nav.addEventListener("click",function(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        menu.classList.add("block")
        
    }else{
        menu.classList.add("hidden")
        menu.classList.remove("block")
    }
})