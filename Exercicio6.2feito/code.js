const body = document.querySelector('body')

function buildProfile(user) {
  const profileNode = document.createElement('div')
  profileNode.classList.add('row')

  const imgNode = document.createElement('img')
  imgNode.src = user.avatar

  const userDataNode = document.createElement('div')
  const userNameNode = document.createElement('h2')
  const userBioNode = document.createElement('span')

  userNameNode.innerText = user.name
  userBioNode.innerText = user.bio

  userDataNode.appendChild(userNameNode)
  userDataNode.appendChild(userBioNode)

  userDataNode.classList.add('col')

  profileNode.appendChild(imgNode)
  profileNode.appendChild(userDataNode)

  return profileNode
}

function buildComments(user) {
  const commentsNode = document.createElement('div')
  commentsNode.classList.add('col')

  const userComments = comments.filter((c) => c.userId === user.id)

  const commentsHTML = userComments.map(
    (c) => `<div class="comment">${c.body}</div>`
  )
  commentsHTML.forEach((html) => (commentsNode.innerHTML += html))

  return commentsNode
}

function buildUser(user) {
  const baseNode = document.createElement('div')

  const profileNode = buildProfile(user)
  const commentsNode = buildComments(user)

  commentsNode.style.marginBottom = '100px'

  baseNode.classList.add('col')

  baseNode.appendChild(profileNode)
  baseNode.appendChild(commentsNode)

  return baseNode
}

function buildForm() {
  const formNode = document.createElement('form')
  const inputNode = document.createElement('textarea')
  const submitNode = document.createElement('button')
  const errorNode = document.createElement('div')

  inputNode.rows = 2
  inputNode.name = 'comment'
  inputNode.placeholder = 'User comment'

  submitNode.type = 'submit'
  submitNode.innerText = 'Add comment'

  formNode.appendChild(inputNode)
  formNode.appendChild(submitNode)
  formNode.appendChild(errorNode)

  formNode.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new FormData(formNode)

    const commentBody = data.get('comment')

    if (!commentBody) {
        errorNode.innerText = 'Impossível submeter com comentário vazio'
        errorNode.style.color = 'red'

        return
    }

    const newComment = {
      userId: '07fd8a42-71a9-47ab-b1c4-16ec30971e2c',
      body: commentBody,
    }

    comments.push(newComment)

    render()
  })

  return formNode
}

function render() {
  body.innerHTML = ''

  for (const u of users) {
    const node = buildUser(u)

    body.appendChild(node)
  }

  const form = buildForm()
  body.appendChild(form)
}

render()