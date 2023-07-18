const divEl = document.createElement('div');
const h2El = document.createElement('h2');
h2El.textContent = "Gandalf";
const anchor = document.createElement('a');
anchor.href = '#';
anchor.textContent = "Go to profile";


divEl.append(h2El, anchor);
document.body.appendChild(divEl);

anchor.addEventListener("click", ()=>{
    alert("you shall not pass!");
});