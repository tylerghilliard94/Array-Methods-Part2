const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let numberArray = integers.sort((a, b) => b - a)
.filter((numbers) => {
    return numbers < 19
}).forEach((numbers) => {
    numbers = numbers * 1.5
    numbers = numbers - 1
    let numberHTMLSelector = document.querySelector(".numbers")
    numberHTMLSelector.innerHTML += `<p>${numbers}</p>`
})