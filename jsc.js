import { getCountries } from "./scripts/countries.js"
import { countryCard } from "./scripts/cards.js"
import { ItalyData } from "./scripts/italy/italyList.js";

window.addEventListener('load', function() {
    enableLink("home")
    // render homepage html:
    let countries = getCountries()
    const countryElement = document.getElementById("Container")
    countryElement.innerHTML += countryCard(countries[0], "italy")
    countryElement.innerHTML += countryCard(countries[1], "france")
    countryElement.innerHTML += countryCard(countries[2], "canada")
})

document.getElementById("home").addEventListener('click', function() {
    enableLink("home")
    // render homepage html:
    let countries = getCountries()
    const countryElement = document.getElementById("Container")
    countryElement.style = "flex-direction: row;"
    countryElement.innerHTML = `
        <section id="Container" class="country-cards">
        </section>`
    countryElement.innerHTML += countryCard(countries[0], "italy")
    countryElement.innerHTML += countryCard(countries[1], "france")
    countryElement.innerHTML += countryCard(countries[2], "canada")
})

document.getElementById("italy").addEventListener('click', function() {
    enableLink("italy")
    const container = document.getElementById("Container")
    container.style = "flex-direction: column;"
    container.innerHTML = `
    <section class="countryImage">
			<img src="images/italy/italy.png" alt="italy header"/>
		</section>
		<section class="countryName">
			<h1>Italy</h1>
			<p>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.</p>
		</section>
		<section class="countryContent">
			<div class="city-title"><h2>Cities</h2></div>
			<div id="cities" class="cards">

			</div>
			<div class="landmark-title"><h2>Landmarks<h2></div>
			<div id="landmarks" class="cards">

			</div>
			<div class="famous-title"><h2>Citizens</h2></div>
			<div id="famous" class="cards">

			</div>
		</section>
    `
    ItalyData()
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