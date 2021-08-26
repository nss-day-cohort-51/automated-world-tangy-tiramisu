export const CountryContainer = (countryObj, country) => {
    return `<section class="countryImage">
                <img src="images/${country}/${countryObj.image}" />
            </section>
            <section class="countryName">
                <h1>${country.charAt(0).toUpperCase() + country.slice(1)}</h1>
                <p>${countryObj.description}</p>
            </section>
            <section class="countryContent">
                <div class="city-title"><h2>Cities</h2></div>
                <div id="cities" class="cards">
                </div>
                <div class="landmark-title"><h2>Landmarks</h2></div>
                <div id="landmarks" class="cards">

                </div>
                <div class="famous-title"><h2>Citizens</h2></div>
                <div id="famous" class="cards">

                </div>
            </section>
    `
}