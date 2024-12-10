const user = {
    firstName: "Carlos",
    lastName: "Silva",
    email: "carlos_silva13@gmail.com"}

const myOrder = {
    code: 1,
    user,
    price: 11.23,
    hasBeenShipped: false,
    productsName: ["T-shit Branca"]
}
// console.log(myOrder)

// 2.8

myOrder.hasBeenShipped = true

// console.log(myOrder.hasBeenShipped)

// console.log("€ " + myOrder.price.toLocaleString())

myOrder.productsName.push("T-Shirt Preta")

// console.log(myOrder.productsName)

// function printOrderMessage (order){
//     return `Olá ${user.firstName} ${user.lastName},
// Obrigado pela tua encomenda de: ${order.productsName.join(", ")} pelo valor de € ${myOrder.price.toLocaleString()}.`

// }

// console.log(printOrderMessage(myOrder))

myOrder.price = {
    amount: 10.25,
    currency: "EUR",
}

const conversionRates = {
    EUR: 1,
    USD: 1.05,
    GBP: 0.83
}

const symbol = {
    EUR: "€",
    USD: "$",
    GBP: "£"
}

function getRates(fromCurrency, toCurrency){
    const sourceRate = conversionRates[fromCurrency]
    const targetRate = conversionRates[toCurrency]

    const ratio = targetRate / sourceRate
    return ratio
}

function convertCurrency (price, fromCurrency, targetCurrency) {

    const rateFinal = getRates(fromCurrency, targetCurrency)
    const finalPrice = price * rateFinal
    
    return finalPrice

}

function giveSymbol(finalCurrency) {
    // const euro


}

console.log(`${convertCurrency(myOrder.price.amount, "GBP", "EUR").toFixed(2)}` )