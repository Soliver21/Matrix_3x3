const container = document.querySelector(".container");
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

box4.addEventListener("click", () => {
    if (box4.style.visibility === "hidden" || box4.style.visibility === "") {
        box4.style.visibility = "visible";
    } else {
        box4.style.visibility = "hidden";
    }
});

const box5 = document.getElementById("5");
const boxes = document.querySelectorAll(".box"); 
box5.addEventListener("click", (event) => {
    boxes.forEach(box => {
        if (box.style.borderRadius === ""){
            box.style.borderRadius = "50%";
        }
        else{
            box.style.borderRadius = "";
        }
    });
});

const box6 = document.getElementById("6");
document.addEventListener("mousemove", (event) => {
    box6.textContent = `${event.clientY} Y , ${event.clientX} X`;
    box6.style.fontSize = "1.3rem";
});

const box7 = document.getElementById("7");
const input1 = document.querySelector(".seven input");
const button1 = document.querySelector(".seven button");
button1.addEventListener("click", (event) =>{
    box7.innerText = `${input1.value}`;
})

const box8 = document.getElementById("8");
const input2 = document.querySelector(".eight input");
input2.addEventListener("keydown", (event)=>{
    box8.innerText = `${event.key}`
    box8.style.fontSize = "2rem"
})

const calc = document.querySelector(".nine button");
const box9 = document.getElementById("9");

const calculate = () => {
    const inputValue = parseFloat(box9.innerText);
    const operator = document.querySelector(".nine select").value;
    const input2 = parseFloat(document.querySelector(".nine input").value);

    let result;

    switch (operator) {
        case "add":
            result = inputValue + Number(input2);
            break;
        case "sub":
            result = inputValue - Number(input2);
            break;
        case "multiply":
            result = inputValue * Number(input2);
            break;
        case "divide":
            result = inputValue / Number(input2);
            break;
        default:
            console.error("Ismeretlen művelet!");
            return;
    }

    box9.innerText = ` ${result}`;
    box9.innerText = input2 ? result : "-";
    if (!input2){
        setTimeout(()=>{
            box9.innerText = 9;
            result = 9;
        },1000)
    }
}

calc.addEventListener("click", calculate)