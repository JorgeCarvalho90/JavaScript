const initialDate = new Date("2024-12-20")
const daysToAdd = 7

function addDays (date = new Date(), days) {
    const resultDate = new Date(+date +days * 86400000)
    return resultDate
}
 

function isFuture (date = new Date()){
    const today = new Date()
    const isFutureDate = +date > +today
    return isFutureDate

}
const resolveDate = addDays(initialDate || new Date(), daysToAdd)

console.log(resolveDate.toLocaleDateString('pt-PT'))
console.log(isFuture(resolveDate))