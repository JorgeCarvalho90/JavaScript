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

function printOrderMessage (order){
    return `Olá ${user.firstName} ${user.lastName},
Obrigado pela tua encomenda de: ${order.productsName.join(", ")} pelo valor de € ${myOrder.price.toLocaleString()}.`

}

console.log(printOrderMessage(myOrder))