export const cityCard = (cityObj, country) => {
    return `
        <article class="city-card">
            <img src="images/${country}/cities/${cityObj.image}" alt="City Image" />
            <h3>${cityObj.name}</h3>
            <h5>Population: ${cityObj.population}</h5>
            <p>${cityObj.description}</p>
            <a href="${cityObj.website}" target="_blank">More Info</a>
        </article>`
}
export const citizenCard = (citizenObj, country) => {
    return `
        <article class="citizen-card">
            <img src="images/${country}/citizens/${citizenObj.image}" alt="Citizen Image" />
            <h3>${citizenObj.name}</h3>
            <h5>${citizenObj.occupation}</h5>
            <p>${citizenObj.description}</p>
            <a href="${citizenObj.website}" target="_blank">More Info</a>
        </article>`
}
export const landmarkCard = (landmarkObj, country) => {
    return `
        <article class="landmark-card">
            <img src="images/${country}/landmarks/${landmarkObj.image}" alt="Landmark Image" />
            <h3>${landmarkObj.name}</h3>
            <h5>Established: ${landmarkObj.year}</h5>
            <p>${landmarkObj.description}</p>
            <a href="${landmarkObj.website}" target="_blank">More Info</a>
        </article>`
}
export const countryCard = (countryObj, country) => {
    return `<a id="country_${country}" href="#">
            <article class="country-card">
                <img src="images/${country}/${countryObj.image}" alt="Country Image" />
                <h3>${countryObj.name}</h3>
                <p>${countryObj.description}</p>
            </article>
            </a>`
}