import { getCountries } from "./scripts/countries.js"
import { countryCard } from "./scripts/cards.js"
import { ItalyData } from "./scripts/italy/italyList.js";
import { FranceData } from "./scripts/france/franceList.js";
import { CanadaData } from "./scripts/canada/canadaList.js";
import { CountryContainer } from "./containers.js"

enableLink("home")
renderHomePageCountries()

document.getElementById("home").addEventListener('click', function() {
    enableLink("home")
    renderHomePageCountries()
})

document.getElementById("italy").addEventListener('click', function() {
    enableLink("italy")
    const container = document.getElementById("Container")
    container.style = "flex-direction: column;"
    container.innerHTML = CountryContainer(getCountries()[0], "italy")
    ItalyData()
})

document.getElementById("country_italy").addEventListener('click', function() {
    enableLink("italy")
    const container = document.getElementById("Container")
    container.style = "flex-direction: column;"
    container.innerHTML = CountryContainer(getCountries()[0], "italy")
    ItalyData()
})

document.getElementById("france").addEventListener('click', function() {
    enableLink("france")
    const container = document.getElementById("Container")
    container.style = "flex-direction: column;"
    container.innerHTML = CountryContainer(getCountries()[1], "france")
    FranceData()
})

document.getElementById("canada").addEventListener('click', function() {
    enableLink("canada")
    const container = document.getElementById("Container")
    container.style = "flex-direction: column;"
    container.innerHTML = CountryContainer(getCountries()[2], "canada")
    CanadaData()
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
function onCountryClick(event) {
    alert(event.target.id)
}