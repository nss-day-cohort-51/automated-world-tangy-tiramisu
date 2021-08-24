export const cityCard = (cityObj) => {
    return `
        <article class="city-card">
            <img src="${cityObj.image}" alt="City Image" />
            <h3>${cityObj.name}</h3>
            <h5>${cityObj.population}</h5>
            <p>${cityObj.description}</p>
            <a href="${cityObj.website}">More Info</a>
        </article>`
}
export const citizenCard = (citizenObj) => {
    return `
        <article class="citizen-card">
            <img src="${citizenObj.image}" alt="Citizen Image" />
            <h3>${citizenObj.name}</h3>
            <h5>${citizenObj.population}</h5>
            <p>${citizenObj.description}</p>
            <a href="${citizenObj.website}">More Info</a>
        </article>`
}
export const landmarkCard = (landmarkObj) => {
    return `
        <article class="landmark-card">
            <img src="${landmarkObj.image}" alt="Landmark Image" />
            <h3>${landmarkObj.name}</h3>
            <h5>${landmarkObj.population}</h5>
            <p>${landmarkObj.description}</p>
            <a href="${landmarkObj.website}">More Info</a>
        </article>`
}