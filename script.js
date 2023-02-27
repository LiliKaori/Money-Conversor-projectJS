// const button = document.getElementsByName("button")
const button = document.getElementById("convertButton")
const select = document.getElementById("currencySelect")

// console.log(button)

const dollar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.getElementById("inputReal").value
    const realValueText = document.getElementById("RealValueText")
    const currencyValueText = document.getElementById("currencyValueText")

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)

    if (select.value == "US$ American Dollar") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais / dollar)
    }

    if (select.value == "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais / euro)
    }   
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currencyName")
    const currencyImg = document.getElementById("currencyImg")

    if (select.value == "US$ American Dollar") {
        currencyName.innerHTML = "American Dollar"
        currencyImg.src = "./Images/EUA_icon.png"
    }
    if (select.value == "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Images/Euro_icon.png"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)