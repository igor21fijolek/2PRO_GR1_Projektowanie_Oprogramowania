async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/region/europe')
    const json = await data.json()
    console.log(json);

    return json
}
let inp = document.getElementById("stolica")
let btn = document.getElementById("sprawdz")
let div = document.getElementById("wynik")
let img = document.createElement("img")
let h1 = document.createElement("h1")
let div2 = document.createElement("div")
let p1 = document.getElementById("poparwne")
let p2 = document.getElementById("niepoprawne")

let country

async function gra(){
    let countries  = await getData()
    country = countries[Math.floor(Math.random() * countries.length)]
    img.setAttribute("src", country.flags.png)
    h1.textContent = country.name.common
    div.appendChild(img)
    div.appendChild(h1)
}
gra()

let punktacja = 0
let punktacja2 = 0

btn.addEventListener("click", function(){

    let stolica = country.capital;
    console.log(stolica,typeof(stolica));
    if(inp.value == stolica)
    {
        punktacja++
        p1.textContent = punktacja
        img.setAttribute("src", country.flags.png)
        h1.textContent = country.name.common
        inp.value = " "
        gra()
    }
    else if(inp.value != stolica){
        punktacja2++
        p2.textContent = punktacja2
        img.setAttribute("src", country.flags.png)
        h1.textContent = country.name.common
        inp.value = " "
        gra()
    }
    if(punktacja2 == 5){
        let p = document.createElement("p")
        let br = document.createElement("br")
        alert(`Przegrałeś!!! Sprubuj ponownie`)
        p.textContent = `Przegrałes! kliknij przycisk by zagrac ponownie`
        p.style.textAlign = "center"
        p.style.color = "rgb(197, 68, 68)"
        document.querySelector("body").appendChild(p)
        p.appendChild(br)
        let button = document.createElement("button")
        button.innerHTML = `zagraj ponownie`
        button.setAttribute("onclick","window.location.reload()" )
        p.appendChild(button)
        inp.value = " "
        
    }
})

