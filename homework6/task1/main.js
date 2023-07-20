const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeModalBtn");
const modal = document.querySelector("#Modal");

const openModal = () =>{
    modal.style.display = 'block';
}

const closeModal = () =>{
    modal.style.display = 'none';
}


openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener('click',(event)=>{
    if(event.target === modal){
        closeModal();
    }
})