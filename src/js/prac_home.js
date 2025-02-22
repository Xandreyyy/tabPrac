const btns = document.querySelectorAll(".nav-wrapper ul li button")

const navHeight = document.querySelector(".nav-btns").clientHeight
document.documentElement.style.setProperty("--nav-menu-height", `${navHeight}px`)

btns.forEach(el => {
    el.addEventListener("click", () =>{
        toggleList()
        console.log(`Nome do botão: ${el.textContent}`)
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
        btn.style.display = "none"        
    }, 200)
}

function showBtn(btn) {
    btn.classList.remove("hide")
    setTimeout(() =>{
        btn.style.display = "inherit"        
    }, 80)
}

const botao = document.getElementById("escreverNum1");
const ipt = document.getElementById("escreverNum");

class generateAnswers{
    constructor(initProduct){
        this.pdt = initProduct;
        this.modifier = 1;
        this.lastAnswer = 0;
    }

    isPrime(num){
        let numSqrt = parseInt(Math.sqrt(num)) + 1;
        let res = false;
        let i = 2;

        if (num < 0){
            num = num * -1;
        }
        
        if (num != 1){
            while ((i < numSqrt) && (num % i != 0)){
                i = i + 1;
            }

            if (i == numSqrt){
                res = true;
            }
        }
        return res;
    }

    getDivisors(num){
        const max = 2;
        
        if (!this.isPrime(num)){

        }
    }
}



botao.addEventListener("click", () => {
    for (let i = 1; i < 15; i++) {
        console.log(i, new generateAnswers(0).isPrime(parseInt(i)))
    }
    
    ipt.value = '';
})

//import { Main } from "./Game.js"

// const diffBtns = document.querySelectorAll(".difficulty")
// let isDiffSelected = false

// diffBtns.forEach(el => {
//     el.addEventListener("click", () =>{
//         console.log(`Dificuldade do botão: ${el.value}`)
        
//         if (isDiffSelected === false){
//             const game = new Main(el.value)
//             game.build()
//             isDiffSelected = true
//         }
//     })
// })