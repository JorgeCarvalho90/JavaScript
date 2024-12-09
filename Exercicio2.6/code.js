const myWorkers = ["Pedro", "Ana", "Rute"]

console.log(myWorkers)

myWorkers.push("Tiago")
console.log(myWorkers)

console.log(myWorkers.join(", "))

console.log(myWorkers.includes("Ana"))

myWorkers.splice(1,1)

console.log(myWorkers)
console.log(myWorkers.includes("Ana"))