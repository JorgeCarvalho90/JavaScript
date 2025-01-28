const myImages = [
    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=",
    "https://media.istockphoto.com/id/1420469187/photo/grassington-in-the-yorkshire-dales.jpg?s=612x612&w=0&k=20&c=uYX48IAHzT2PAb_I8FwjpI9a7Y3EDr4UWaODdrSrOzQ="
]

const container = document.querySelector(".container")

const img = document.createElement('img')
img.src = myImages[0]
container.appendChild(img)

let index = 0
let intervalID = undefined


const pauseButton = document.querySelector(".button-pause")
const autoPlayButton = document.querySelector(".button-auto-play")
const nextButton = document.querySelector(".button-next")
const backButton = document.querySelector(".button-back")

function autoPlay(){
   autoPlayButton.disabled = true
   pauseButton.disabled = false
   nextButton.disabled = true
   backButton.disabled = true
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        index = (index + 1) % myImages.length
        img.src = myImages[index]
        
    }, 500)
}

autoPlay()

pauseButton.addEventListener('click', (event) => {
    clearInterval(intervalID)
    autoPlayButton.disabled = false
    pauseButton.disabled = true
    nextButton.disabled = false
    backButton.disabled = false
})

autoPlayButton.addEventListener('click', autoPlay)

nextButton.addEventListener('click', (event) => {
    index += 1
    if(index >= 3){
        index = 0
    }
    img.src = myImages[index]

})

backButton.addEventListener('click', (event) => {
    index -= 1
    if(index <= -1){
        index = 2
    }
    img.src = myImages[index]

})