const welcome = 'bem-vindo à nossa aplicação'

function firstLetterUpper(welcome){
    return welcome[0].toUpperCase() + welcome.slice(1)
}

function replaceApp(welcome){
    return welcome.replace('aplicação','app')
}

const connectWelcomes = firstLetterUpper(replaceApp(welcome))


function removeSpacesAndCount(connectWelcomes){
    return connectWelcomes.replaceAll(' ','').length
   
}

console.log(connectWelcomes + '   ' + removeSpacesAndCount(connectWelcomes))