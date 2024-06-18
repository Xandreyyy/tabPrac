const btns = document.querySelectorAll(".nav-wrapper ul li button")

const navHeight = document.querySelector(".nav-btns").clientHeight
document.documentElement.style.setProperty("--nav-menu-height", `${navHeight}px`)

btns.forEach(el => {
    el.addEventListener("click", () =>{
        toggleList()
        console.log("Clicou no " + el.textContent)
    })
})

function toggleList(){
    const diffUl = document.getElementById("diffs")
    const modeUl = document.getElementById("gameModes")

    if(!diffUl.classList.contains("hide")){
        hideBtn(diffUl)
        showBtn(modeUl)
    }else{
        hideBtn(modeUl)
        showBtn(diffUl)
    }
}

function hideBtn(btn){
    btn.classList.add("hide")
    setTimeout(() =>{
        btn.style.visibility = "hidden"        
    }, 250)
}

function showBtn(btn) {
    btn.classList.remove("hide")
    setTimeout(() =>{
        btn.style.visibility = "visible"        
    }, 70)
}

