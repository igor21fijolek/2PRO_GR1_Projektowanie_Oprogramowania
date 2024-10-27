// const uczen = [{imie: "jan", nazwisko: "kowalski", klasa: {nazwa:"2PRO"}, wychowawca:"jan kowalski"}, {imie: "igor", nazwisko: "fijolek", klasa: "3PRO"}]

// for(let i = 0; i<uczen.length; i++)
// {
    
//     if(uczen[i].klasa = "2PRO"){
//         uczen[i].klasa = "1PRO";    
//     }
// }
// console.log(uczen[0]);

async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/all')
    const json = await data.json() 
    console.log(json);

    return json
}



 async function kraje(){
    const data = await getData()
     console.log(data[0].name.common);
     
     for(let i = 0; i< data.length; i++){
        let div = document.createElement("div")
        div.style.width = "200px"
        div.style.height = "400px"
        div.style.border = "1px solid black"
        div.style.background = "grey"
        document.querySelector("body").appendChild(div)
        let img = document.createElement("img")
        img.setAttribute("src", data[i].flags.png)
        div.appendChild(img)
        img.style.width = "200px"
        img.style.height = "120px"
        let h1 = document.createElement("h1")
        h1.textContent = data[i].name.common
        div.appendChild(h1)
        div.style.textAlign = "center";
        let h3 = document.createElement("h1")
        let h4 = document.createElement("h1")
        let h5 = document.createElement("h1")
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(h5);
        h3.textContent = data[i].capital;
        h4.textContent = data[i].population;
        h5.textContent = data[i].continents.join[", "];
        div.classList.add("flip-in-hor-bottom")
     }
}
kraje()

