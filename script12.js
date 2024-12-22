let bt = document.createElement("button");
bt.innerText = "הכפתור";
bt.addEventListener("click", () => {
    alert("כל הכבוד! ניצחת את אתר");
});
let ft = true
let ft2 = 1
bt.classList.add("bt");
document.body.appendChild(bt);

bt.addEventListener("mouseover", () => {
    if(ft === true) {
        bt.style.position = "absolute"
        bt.style.marginRight = Math.floor(Math.random() * 500) + "px";
        bt.style.marginLeft = Math.floor(Math.random() * 500) + "px";
        bt.style.marginBottom = Math.floor(Math.random() * 500) + "px";
        bt.style.marginTop = Math.floor(Math.random() * 400) + "px";        
    }
});
addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (ft2 === 1) {
            ft = false
            ft2 = 4
        }
        else {
            ft = true
            ft2 = 1
        }
    }
})