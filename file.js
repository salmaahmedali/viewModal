let btns=document.querySelectorAll(".btn");
let modal=document.querySelector(".modal")
let overlay=document.querySelector(".overlay")
let close=document.querySelector(".close-modal")
// console.log(btns);
// console.log(close);
const showModal=()=>{
    modal.classList.remove("hidden")
    overlay.classList.remove(".hidden")
}
const hideModal=()=>{
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
for(let i=0 ;i< btns.length ;i++ ){
    // console.log(btns[i].textContent);
    btns[i].addEventListener("click",showModal) 
}
close.addEventListener("click",hideModal)
document.addEventListener("keydown",function(e){
    console.log("key was pressed");
    console.log(e);
    
            // console.log("control presserd");
            if(e.key ==="Escape" &&!modal.classList.contains("hidden")){
                hideModal()
            }
}   
)


