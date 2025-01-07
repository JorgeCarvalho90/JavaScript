const currency = {
    'Eur': '€',
    'USD': '$',
    'GBP': '£'
}

const newCurrencyFormat ={}

for(const [key, value] of Object.entries(currency)){
    newCurrencyFormat[value]= key

}

console.log(newCurrencyFormat)