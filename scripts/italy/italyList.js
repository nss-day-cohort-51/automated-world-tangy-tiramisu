import { getCities } from './cities/CityDataProvider.js'
import { getLandmarks } from './landmarks/LandmarkDataProvider.js'
import { getFamousCitizens } from './famousCitizens/FamousCitizensDataProvider.js'
import { cityCard, landmarkCard, citizenCard } from '../cards.js'

export const ListCountryData = () => {
    const cityElement = document.querySelector("#cities")
    const citizenElement = document.querySelector("#famous")
    const landmarkElement = document.querySelector("#landmarks")
    for (const city of getCities()) {
        cityElement.innerHTML += cityCard(city, "italy")
    }
    for (const citizen of getFamousCitizens()) {
        citizenElement.innerHTML += citizenCard(citizen, "italy")
    }
    for (const landmark of getLandmarks()) {
        landmarkElement.innerHTML += landmarkCard(landmark, "italy")
    }
}