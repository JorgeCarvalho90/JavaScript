const price = 345.59
const discount = 0.1

const discountValue = price * discount

const finalPrice = price - discountValue


// console.log('Preço: €' + price.toFixed(2))
// console.log('Desconto: €' + discountValue.toFixed(2) + ' (-' + discount*100 + '%)')
// console.log('Total: €' + finalPrice.toFixed(2))

console.log('Preço: €' + price.toFixed(2) + "\n" + 'Desconto: €' + discountValue.toFixed(2) + ' (-' + discount*100 + '%)' + "\n" + 'Total: €' + finalPrice.toFixed(2))