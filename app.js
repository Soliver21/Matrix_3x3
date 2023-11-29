const container = document.querySelector(".container");
container.innerHTML = "";
for (let i = 1; i < 10; i++) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    container.innerHTML += `<div class="box" id="${i}">${i}</div>`;
    const box = document.getElementById(`${i}`);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
const box = document.getElementById("1");
box.addEventListener("click", (event) =>{
    const Blur = event.target;
    if (Blur.style.filter === ""){
        Blur.style.filter = "blur(5px)";
    }
    else{
        Blur.style.filter = "";
    }
    // Blur.classList.toggle("blur(5px)")
})