const randomNumber = Math.floor(Math.random() * 100) + 1;

const myNumber = 40


let numberOfTurns = 0

if (numberOfTurns < 10) {
    if (myNumber > randomNumber){
        console.log(`Numero muito alto!`)
        numberOfTurns +=1

    } else if (myNumber < randomNumber){
        console.log(`Numero muito baixo!`)
        numberOfTurns +=1
    } else {
        console.log(`Certo!`)
    }
}

console.log(numberOfTurns)
console.log(randomNumber)