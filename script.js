const button = document.getElementById("convertButton")
const select = document.getElementById("currencySelect")

const convertValues = async () => {
    const inputReais = document.getElementById("inputReal").value
    const realValueText = document.getElementById("RealValueText")
    const currencyValueText = document.getElementById("currencyValueText")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,CAD-BRL,ARS-BRL,JPY-BRL,CNY-BRL").then(response=> response.json())
    console.log(data)

    const dollar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    const dollarC = data.CADBRL.high
    const peso = data.ARSBRL.high
    const yen = data.JPYBRL.high
    const yuan = data.CNYBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)

    if (select.value == "US$ American Dollar") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(inputReais / dollar)
    }

    if (select.value == "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR' }).format(inputReais / euro)
    }

    if (select.value == "BTC Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BTC' }).format(inputReais / bitcoin)
    }

    if (select.value == "CA$ Canadian Dollar") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'CAD' }).format(inputReais / dollarC)
    }

    if (select.value == "ARS Argentine Peso") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'ARS' }).format(inputReais / peso)
    }

    if (select.value == "JP¥ Yen") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'JPY' }).format(inputReais / yen)
    }

    if (select.value == "CN¥ Yuan") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'CNY' }).format(inputReais / yuan)
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
    if (select.value == "BTC Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Images/BTC_icon.png"
    }
     if (select.value == "CA$ Canadian Dollar") {
        currencyName.innerHTML = "Canadian Dollar"
        currencyImg.src = "./Images/CAD_icon.png"
    }
     if (select.value == "ARS Argentine Peso") {
        currencyName.innerHTML = "Argentine Peso"
        currencyImg.src = "./Images/ARG_icon.png"
    }
     if (select.value == "JP¥ Yen") {
        currencyName.innerHTML = "Yen"
        currencyImg.src = "./Images/JPY_icon.png"
    }
     if (select.value == "CN¥ Yuan") {
        currencyName.innerHTML = "Yuan"
        currencyImg.src = "./Images/China_icon.png"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)