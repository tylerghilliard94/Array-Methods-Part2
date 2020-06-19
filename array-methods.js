const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(planet => {
    const planetEl = document.querySelector("#planets")
    let planetHTML = `<h2>${planet}</h2>`
    planetEl.innerHTML += planetHTML
})


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capPlanets = planets.map(planet =>{
    return planet[0].toUpperCase() + planet.slice(1)
     
})
console.log(capPlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let ePlanets = planets.filter(planet => {
    let search = "e"
    for(let i = 0; i < planet.length; i++){
        if(planet.includes(search)){
            return true
        }
    }
    
})

console.log(ePlanets)