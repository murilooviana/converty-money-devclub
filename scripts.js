const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value //variavel para pegar apenas o valor que foi digitado no input
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em REAL
  const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

  const dolarToday = 5.2 // Valor do dolar atual
  const euroToday = 5.8 //Valor do euro atual
  const libraToday = 6.6 // Valor da libra atual
  const bitcoinToday = 0.00000226 // Valor do bitcoin atual

  if(currencySelect.value == "dolar") { // Se o valor do select for igual a "dolar" ele faz a ação
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { // Usando o Intl para formatar o número e ficar bonito
    style:"currency",
    currency:"USD"
  }).format(inputCurrencyValue / dolarToday) // Ja formata fazendo a conversão
  }

  if(currencySelect.value == "euro") {
     currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency:"EUR"
     }).format(inputCurrencyValue / euroToday)
  }

  if(currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style:"currency",
      currency:"GBP"
     }).format(inputCurrencyValue / libraToday)
  }

  if(currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"BTC"
     }).format(inputCurrencyValue / bitcoinToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue) // Faz com que ele pegue o valor que foi colocado no input em real e coloque no html o texto o valor digitado

  

} 

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.querySelector(".currency-img")


  if(currencySelect.value == "dolar"){
  currencyName.innerHTML = "Dólar Americano"
  currencyImg.src = "./assets/dolar.png"
  }
  if(currencySelect.value == "euro") {
  currencyName.innerHTML = "Euro"
  currencyImg.src = "./assets/euro.png"
  }
  if(currencySelect.value == "libra") {
  currencyName.innerHTML = "Libra Esterlina"
  currencyImg.src = "./assets/libra.png"
  }
  if(currencySelect.value == "bitcoin") {
  currencyName.innerHTML = "Bitcoin"
  currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}



currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues) //evento que quando clicado o botão realize a função "convertValues"