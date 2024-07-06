import data from "./data.js";

const currencyOptionsDiv1 = document.querySelector(".currencyOptions1");
const currencyOptionsDiv2 = document.querySelector(".currencyOptions2");
const form = document.getElementById("form");
const fromCurrencyInput = document.getElementById("fromCurrency");
const toCurrencyInput = document.getElementById("toCurrency");

const fromSelected = document.getElementById("fromSelected");
const toSelected = document.getElementById("toSelected");

form.onsubmit = (e) => {
  e.preventDefault();
  convertHandler();
};

let currencies = Object.entries(data);

currencies.map((currency) => {
  if (currency[1] == "") return;
  currencyOptionsDiv1.innerHTML += `<option value="${currency[0]}">${currency[1]}</option>`;
  currencyOptionsDiv2.innerHTML += `<option value="${currency[0]}">${currency[1]}</option>`;
});

function convertHandler() {
  fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromSelected.value}.json`
  )
    .then((res) => res.json())
    .then((data) => convertCurrency(data[fromSelected.value]));
}

function convertCurrency(currency){
    let conversionRate = currency[toSelected.value]
    let convertedCurrencyValue = Number(fromCurrency.value) * conversionRate

    toCurrencyInput.value = convertedCurrencyValue
}

document.getElementById('swapButton').onclick = () => swap()

function swap(){
    console.log('hello')
    let selected = fromSelected.value
    fromSelected.value = toSelected.value
    toSelected.value = selected

    let fromInput = fromCurrencyInput.value
    fromCurrencyInput.value = toCurrencyInput.value
    toCurrencyInput.value = fromInput
}