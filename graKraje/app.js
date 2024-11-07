async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/region/europe')
    const json = await data.json()
    console.log(json);
    return json
}

let div = document.getElementById("kraje")
let kraj1 = document.getElementById("kraj1")
let kraj2 = document.getElementById("kraj2")
let punktacja = document.getElementById("punktacja")
let img1 = document.createElement("img")
let img2 = document.createElement("img")
let name1 = document.createElement("h3")
let name2 = document.createElement("h3")
let population1 = document.createElement("h3")
let population2 = document.createElement("h3")
let poparwneOdp = document.getElementById("poprawne")
let niePoparwneOdp = document.createElement("niepoprawne")
let button = document.querySelector("button")

punktacja.appendChild(poparwneOdp)
punktacja.appendChild(niePoparwneOdp)

name1.style.textAlign = "center"
name2.style.textAlign = "center"

let country1
let country2

async function gra(){
    let countries  = await getData()
    country1 = countries[Math.floor(Math.random() * countries.length)] 
    country2 = countries[Math.floor(Math.random() * countries.length)] 
    img1.setAttribute("src", country1.flags.png)
    img2.setAttribute("src", country2.flags.png)
    name1.textContent = country1.name.common
    name2.textContent = country2.name.common
    kraj1.appendChild(img1)
    kraj1.appendChild(name1)
    kraj2.appendChild(img2)
    kraj2.appendChild(name2)
}
gra()

let poprawne = 0;
let niepoprawne = 0;

kraj1.addEventListener("click",function(){
    population1.textContent = country1.population
    population2.textContent = country2.population
    console.log(population1);
    if(country1.population > country2.population){
        kraj1.style.backgroundColor = "green"
        kraj1.appendChild(population1)
        kraj2.appendChild(population2)
        poprawne++
        console.log(poprawne);
        poparwneOdp.textContent = poprawne;
        console.log(poprawne);
    }
    else if(country1.population < country2.population){
        kraj1.style.backgroundColor = "red"
        kraj1.appendChild(population1)
        kraj2.appendChild(population2)
        niepoprawne++
        console.log(niepoprawne);
        niePoparwneOdp.textContent = niepoprawne;
        console.log(niepoprawne);
     }
     
})

kraj2.addEventListener("click",function(){
    console.log("object");
    population1.textContent = country1.population
    population2.textContent = country2.population
    if(country1.population > country2.population){
        kraj1.style.backgroundColor = "green"
        kraj2.style.backgroundColor ='red'
        kraj1.appendChild(population1)
        kraj2.appendChild(population2)
        poprawne++
        poparwneOdp.textContent = "popprawne" + poprawne;
        console.log(poprawne);
    }
    else if(country1.population1 < country2.population){
        kraj1.style.backgroundColor = "red"
        kraj2.style.backgroundColor = 'green'
        kraj1.appendChild(population1)
        kraj2.appendChild(population2)
        niepoprawne++
        niePoparwneOdp.textContent = niepoprawne;
        console.log(niepoprawne);
     }
     
})

button.addEventListener("click", function(){
    kraj1.style.backgroundColor= "white"
    gra()
})