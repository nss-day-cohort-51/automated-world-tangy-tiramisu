import { getCities } from './cities/CityDataProvider.js'
import { getLandmarks } from './landmarks/LandmarkDataProvider.js'
import { getFamousCitizens } from './famousCitizens/FamousCitizensDataProvider.js'
import { cityCard, landmarkCard, citizenCard } from '../cards.js'

export const CanadaData = () => {
    const cityElement = document.querySelector("#cities")
    const citizenElement = document.querySelector("#famous")
    const landmarkElement = document.querySelector("#landmarks")
    for (const city of getCities()) {
        cityElement.innerHTML += cityCard(city, "canada")
    }
    for (const citizen of getFamousCitizens()) {
        citizenElement.innerHTML += citizenCard(citizen, "canada")
    }
    for (const landmark of getLandmarks()) {
        landmarkElement.innerHTML += landmarkCard(landmark, "canada")
    }
}