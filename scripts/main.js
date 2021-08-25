import { getCountries } from "./countries.js"
import { countryCard } from "./cards.js"

let countries = getCountries()
const countryElement = document.querySelector(".country-cards")
countryElement.innerHTML += countryCard(countries[0], "italy")
countryElement.innerHTML += countryCard(countries[1], "canada")
countryElement.innerHTML += countryCard(countries[2], "france")