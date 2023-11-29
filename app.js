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
const box1 = document.getElementById("1");
box1.addEventListener("click", (event) =>{
    const Blur = event.target;
    if (Blur.style.filter === ""){
        Blur.style.filter = "blur(5px)";
    }
    else{
        Blur.style.filter = "";
    }
    // Blur.classList.toggle("blur(5px)")
})

const box2 = document.getElementById("2");
box2.style.transform = "scale(1)";
box2.addEventListener("mouseover", (event) => {
    const scale = event.target;
    if (scale.style.transform === "scale(1)") {
        scale.style.transform = "scale(0.5)";
        scale.style.transition = "0.5s"
    } else {
        scale.style.transform = "scale(1)";
        scale.style.transition = "0.5s"
    }
});

const box3 = document.getElementById("3");
box3.addEventListener("dblclick", (event) => {
    const rndNum = Math.floor(Math.random()*1000);
    box3.innerHTML = rndNum;
})

const box4 = document.getElementById("4");
box4.addEventListener("click", (event) => {
    event.target.style.visibility = "";
    if(event.target.style.visibility === "hidden"){
        event.target.style.visibility = "";
    }
    else{
        event.target.style.visibility = "hidden";
    }
})