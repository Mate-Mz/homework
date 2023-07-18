const knopka = document.querySelector("#btn");
const text = document.querySelector(".text");

knopka.addEventListener("click", ()=>{
    if(text.style.display == "none"){
        text.style.display = "block";
        knopka.textContent = "HIDE"
    }else{
        text.style.display = "none";
        knopka.textContent = "REVEAL"
    }
});