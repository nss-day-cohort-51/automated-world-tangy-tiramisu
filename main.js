import { getCountries } from "./scripts/countries.js"
import { countryCard } from "./scripts/cards.js"
import { ItalyData } from "./scripts/italy/italyList.js";
import { FranceData } from "./scripts/france/franceList.js";
import { CanadaData } from "./scripts/canada/canadaList.js";
import { CountryContainer } from "./containers.js"
enableLink("home")
renderHomePageCountries()
onCountryClick()
let current = "Home"
document.getElementById("home").addEventListener('click', function() {
    enableLink("home")
    current = "Home"
    renderHomePageCountries()
    onCountryClick()
})
document.getElementById("italy").addEventListener('click', function() {
    Render("italy")
})
document.getElementById("france").addEventListener('click', function() {
    Render("france")
})
document.getElementById("canada").addEventListener('click', function() {
    Render("canada")
})
function enableLink(linkId) {
    let children = document.getElementById("linkList").children
    for (let i = 0; i < children.length; i++) {
        if (children[i].id === linkId) {
            children[i].style.color = "#58C2F1"
            children[i].style.cursor = "default"
        } else {
            children[i].style.color = "white"
            children[i].style.cursor = "pointer"
        }
    }
}
function renderHomePageCountries() {
    let countries = getCountries()
    const countryElement = document.getElementById("Container")
    countryElement.innerHTML = ``
    countryElement.style = "flex-direction: row;"
    countryElement.innerHTML += countryCard(countries[0], "italy")
    countryElement.innerHTML += countryCard(countries[1], "france")
    countryElement.innerHTML += countryCard(countries[2], "canada")
}
function onCountryClick() {
    document.getElementById("country_italy").addEventListener('click', function() {
        Render("italy")
    })
    document.getElementById("country_france").addEventListener('click', function() {
        Render("france")
    })
    document.getElementById("country_canada").addEventListener('click', function() {
        Render("canada")
    })
}
function Render(country) {
    switch (country) {
        case "italy":
            enableLink("italy")
            current = "Italy"
            const container = document.getElementById("Container")
            container.style = "flex-direction: column;"
            container.innerHTML = CountryContainer(getCountries()[0], "italy")
            ItalyData() 
            break;
        case "france":
            enableLink("france")
            current = "France"
            const container2 = document.getElementById("Container")
            container2.style = "flex-direction: column;"
            container2.innerHTML = CountryContainer(getCountries()[1], "france")
            FranceData()
            break;
        case "canada":
            enableLink("canada")
            current = "Canada"
            const container3 = document.getElementById("Container")
            container3.style = "flex-direction: column;"
            container3.innerHTML = CountryContainer(getCountries()[2], "canada")
            CanadaData()
            break;     
    }
}
document.getElementById("linkList").addEventListener("mouseover", function(event) {
    event.target.style.color = "#58C2F1"
})
document.getElementById("linkList").addEventListener("mouseout", function(event) {
    if (event.target.innerHTML !== current) {
        event.target.style.color = "white"
    }
})