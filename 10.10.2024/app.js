const body = document.querySelector("body")

const div = document.createElement("div")
body.appendChild(div)
div.style.width = "500px"
div.style.height = "500px"
div.style.border = "5px solid black"
div.setAttribute("id", "testowa")

// zadanie 1

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
let inp1 = document.createElement("input");
let btn3 = document.createElement("button");
let br = document.createElement("br");
let br2 = document.createElement("br");
let inp2 = document.createElement("input");
let btn4 =  document.createElement("button");
let inp3 = document.createElement("input");
let btn5  = document.createElement("button");
let ul = document.createElement("ul");



body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(br);
body.appendChild(inp1);
body.appendChild(btn3);
div.appendChild(inp2);
div.appendChild(btn4);
body.appendChild(br2);
body.appendChild(inp3)
body.appendChild(btn5)
body.appendChild(ul)

btn1.style.padding = "5px";
btn1.innerHTML = "kolor1";
btn1.style.borderRadius = "20%";

btn2.style.padding = "5px";
btn2.innerHTML = "kolor2";
btn2.style.borderRadius = "20%";

btn3.innerHTML = " zmien kolor";
btn3.style.padding = "5px";
btn3.style.borderRadius = "20%";

btn4.innerHTML = "wklej tekst";
btn4.style.padding = "5px";
btn4.style.borderRadius = "20%";

btn5.innerHTML = "wklej tekst";
btn5.style.padding = "5px";
btn5.style.borderRadius = "20%";




inp1.type = "color";
btn1.addEventListener("click", function()
{
    div.style.background = "blue";
})

btn2.addEventListener("click", function()
{
    div.style.background = "grey";
})

btn3.addEventListener("click", function()
{
    div.style.background = inp1.value;
})

btn4.addEventListener("click", function()
{
    let p = document.createElement("p");
    div.appendChild(p);
    p.textContent = inp2.value;
})

btn5.addEventListener("click", function()
{
    let li = document.createElement("li");
    let btn6 = document.createElement("button");
    li.textContent = inp3.value;
    btn6.innerHTML = "delete";
    btn6.style.padding = "5px";
    btn6.style.borderRadius = "20%";
    ul.appendChild(li);
    li.appendChild(btn6);
    btn6.addEventListener("click", function()
{
    // this.parentElement.style.display = "none"
    ul.removeChild(li);
    ul.removeChild(btn6);
})
})

