const input = require('sync-input');
console.log('Welcome to Currency Converter!')
console.log('1 USD equals  1 USD')
console.log('1 USD equals  113.5 JPY')
console.log('1 USD equals  0.89 EUR')
console.log('1 USD equals  74.36 RUB')
console.log('1 USD equals  0.75 GBP')
let inputCurrencyFrom
let inputCurrencyTo
let inputAmount
let action
const currencyObj = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
  calc: function (inputCurrencyFrom, inputCurrencyTo, inputAmount) {
    return ((1 / this[inputCurrencyFrom]) * (this[inputCurrencyTo] * inputAmount)).toFixed(4)
  }
}

while (action != '2') {
  welcome()
}
console.log('Have a nice day!')

function welcome() {
  console.log('What do you want to do?')
  action = input('1-Convert currencies 2-Exit program\n')
  if (action == '1') {
    convert()
  } else if (action != 1 && action != 2) {
    console.log('Unknown input')
  }
}

function convert() {
  while (!(currencyObj.hasOwnProperty(inputCurrencyFrom))) {
    console.log('What do you want to convert?')
    inputCurrencyFrom = input('From:').toUpperCase()
    if (!(currencyObj.hasOwnProperty(inputCurrencyFrom))) {
      console.log('Unknown currency')
    } else {
      inputCurrencyTo = input('To:').toUpperCase()
      if (!(currencyObj.hasOwnProperty(inputCurrencyTo))) {
        console.log('Unknown currency')
      } else {
        inputAmount = input('Amount:');
        if (isNaN(inputAmount)) {
          console.log('The amount has to be a number')
        } else if (!(inputAmount >= 1)) {
          console.log('The amount can not be less than 1')
        } else {
          let res = currencyObj.calc(inputCurrencyFrom, inputCurrencyTo, inputAmount)
          console.log(`Result: ${inputAmount} ${inputCurrencyFrom} equals ${res} ${inputCurrencyTo}`)
        }
      }
    }
  }
}