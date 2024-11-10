async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/region/europe')
    const json = await data.json()
    return json
}


let kraj1 = document.getElementById("kraj1")
let kraj2 = document.getElementById("kraj2")



let country1;
let country2;

async function gra(){
    hidePopulation();
    
    let countries  = await getData()
    country1 = countries[Math.floor(Math.random() * countries.length)] 
    country2 = countries[Math.floor(Math.random() * countries.length)] 
    if (country1.name.common == country2.name.common) {
        while (country1.name.common == country2.name.common){
            country2 = countries[Math.floor(Math.random() * countries.length)] 
        }
    }


    document.getElementById('flag1').setAttribute('src', country1.flags.png);
    document.getElementById('flag2').setAttribute('src', country2.flags.png);
    document.getElementById('countryName1').innerText = country1.name.common;
    document.getElementById('countryName2').innerText = country2.name.common;

    document.getElementById('countryPopulation1').innerText = country1.population.toLocaleString();
    document.getElementById('countryPopulation2').innerText = country2.population.toLocaleString();
    
 
}


let poprawne = 0;
let niepoprawne = 0;
let udzielonoOdpowiedzi = false;

kraj1.addEventListener("click",function(){
    if (udzielonoOdpowiedzi){
        return;
    }
    udzielonoOdpowiedzi = true;
    if(country1.population > country2.population){
        //kraj1.style.backgroundColor = "green"
        kraj1.classList.add('bg_green');
        kraj2.classList.add('bg_red');
        poprawne++
    }
    else if(country1.population < country2.population){
        kraj1.classList.add('bg_red');
        kraj2.classList.add('bg_green');
        niepoprawne++
     }
     aktualizujWynik();
     showPopulation();
     showNextButton();
     
})

kraj2.addEventListener("click",function(){
    if (udzielonoOdpowiedzi){
        return;
    }
    udzielonoOdpowiedzi = true;
    if(country1.population > country2.population){
        kraj2.classList.add('bg_red');
        kraj1.classList.add('bg_green');
        niepoprawne++;
    }
    else if(country1.population < country2.population){
        kraj2.classList.add('bg_green');
        kraj1.classList.add('bg_red');
        poprawne++;
     }
     showPopulation();
     aktualizujWynik();
     showNextButton();
     
})

document.getElementById('nextStep').addEventListener("click", function(){
    kraj2.classList.remove('bg_green');
    kraj2.classList.remove('bg_red');
    kraj1.classList.remove('bg_green');
    kraj1.classList.remove('bg_red');
    hideNextButton();
    udzielonoOdpowiedzi = false;
    gra();
})


function aktualizujWynik(){
    document.getElementById("poprawne").innerHTML = poprawne;
    document.getElementById("niepoprawne").innerHTML = niepoprawne;
}

function showPopulation(){
    document.getElementsByClassName('countryPopulation')[0].classList.remove('hidden');
    document.getElementsByClassName('countryPopulation')[1].classList.remove('hidden');
}

function hidePopulation(){
    document.getElementsByClassName('countryPopulation')[0].classList.add('hidden');
    document.getElementsByClassName('countryPopulation')[1].classList.add('hidden');
}

function showNextButton(){
    document.getElementById('nextStep').classList.remove('hidden');
}

function hideNextButton(){
    document.getElementById('nextStep').classList.add('hidden');
}
 

aktualizujWynik();
gra()