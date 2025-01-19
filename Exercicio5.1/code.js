const h1ButWithJavaScript = document.querySelector('h1')

h1ButWithJavaScript.style.color = 'blue'
h1ButWithJavaScript.innerText = 'Bacalhau à brás, but with JavaScript'

const newDiv = document.createElement('div')
newDiv.classList.add ('coisas')
newDiv.innerText = 'child node'

h1ButWithJavaScript.appendChild(newDiv)