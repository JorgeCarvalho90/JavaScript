const myNumber = 3

let numberOfTurns = 0

while (numberOfTurns < 10) {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    if (myNumber > randomNumber){
        console.log(`Numero muito alto!`)
        numberOfTurns +=1

    } else if (myNumber < randomNumber){
        console.log(`Numero muito baixo!`)
        numberOfTurns +=1

    } else {
        console.log(`Certo!`)
        break
    }
}

console.log(numberOfTurns)
// console.log(randomNumber)