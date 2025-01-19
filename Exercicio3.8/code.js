const orders = [
    { id: 'A454', price: { amount: 12.99, currency: 'EUR' } },
    { id: 'A568', price: { amount: 88.43, currency: 'GBP' } },
    { id: 'A346', price: { amount: 12.52, currency: 'EUR' } },
    { id: 'A964', price: { amount: 11.99, currency: 'USD' } },
    { id: 'A235', price: { amount: 24.99, currency: 'USD' } },
    { id: 'A534', price: { amount: 53.32, currency: 'EUR' } },
    { id: 'A844', price: { amount: 61.99, currency: 'GBP' } },
    { id: 'A124', price: { amount: 32.00, currency: 'USD' } },
    { id: 'A567', price: { amount: 76.35, currency: 'USD' } },
    { id: 'A234', price: { amount: 23.99, currency: 'GBP' } },
    { id: 'A656', price: { amount: 55.99, currency: 'EUR' } },
    { id: 'A238', price: { amount: 21.05, currency: 'EUR' } },
]

function calculatePriceSum(list) {
    const groupedSums = {}

    for (const o of list) {
        if (groupedSums[o.price.currency] === undefined) {
            groupedSums[o.price.currency] = o.price.amount
          } else {
            groupedSums[o.price.currency] += o.price.amount
          }
    }

    return groupedSums
}

function calculatePriceSumCompact(list) {
  let groupedSums = {}

  for (const o of list) {
    groupedSums = {
      ...groupedSums,
      [o.price.currency]:
        groupedSums[o.price.currency] === undefined
          ? o.price.amount
          : groupedSums[o.price.currency] + o.price.amount,
    }
  }

  return groupedSums
}

function calculatePriceSumReduce(list) {
  return list.reduce((acc, o) => {
    if (acc[o.price.currency] === undefined) {
      acc[o.price.currency] = o.price.amount
    } else {
      acc[o.price.currency] += o.price.amount
    }

    return acc
  }, {})
}

console.log({
    normal: calculatePriceSum(orders),
    compact: calculatePriceSumCompact(orders),
    reduce: calculatePriceSumReduce(orders),
})







// function searchByID(i){
//     return orders.filter((o) => o.id === i)
// } 

// console.log(searchByID('A844'))






// const sumAll = orders.reduce((acc, order) => acc + order.price.amount, 0).toLocaleString(2)

// console.log(sumAll);

// for (const order of orders){

//     console.log(order.price.amount)
// }
