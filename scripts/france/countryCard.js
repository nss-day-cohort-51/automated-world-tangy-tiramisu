export const countryCard = (image, header, content) => {
    let currentHTML = `<article class="country-card">
    <div><img class="list-image" src="images/france/${image}" /></div>
    <h3 class="list-header">${header}</h3>
    <ul>`
    for (let i = 0; i < content.length; i++) {
        currentHTML += `<li class="list-item">${content[i]}</li>`
    }
    currentHTML += `</ul></article>`
    return currentHTML
}