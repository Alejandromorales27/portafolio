const menu = document.getElementById("menu-header")
console.log(menu.style.position)

function scroll(){
    let scroll=window.scrollY
    if(scroll>0){
        menu.style.position="fixed"
    }else{
        menu.style.position="static"
    }
}

window.addEventListener("scroll",scroll)