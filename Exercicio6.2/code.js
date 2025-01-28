const users = [
    {
        "name": "Ana Almeida",
        "bio": "Aventuras na montanha são a minha vida ⛰️",
        "avatar": "https://images.unsplash.com/photo-1598601065215-751bf8798a2c?q=80&w=3614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "id": "7354a16e-028c-4934-9a29-391fde378250"
    },
    {
        "name": "Pedro Martins",
        "bio": "Sempre em busca de novos sabores",
        "avatar": "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
        "id": "07fd8a42-71a9-47ab-b1c4-16ec30971e2c"
    },
    {
        "name": "Jorge Santos",
        "bio": "FORÇA FOCO E FÉ",
        "avatar": "https://plus.unsplash.com/premium_photo-1664474563253-02b680ca192d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww",
        "id": "3f7da5f0-5ab7-463f-97e4-9db500791100"
    }
]

const comments = [
    { userId: '7354a16e-028c-4934-9a29-391fde378250', body: 'Hoje subi duas montanhas' },
    { userId: '7354a16e-028c-4934-9a29-391fde378250', body: 'Hoje subi três montanhas' },
    { userId: '3f7da5f0-5ab7-463f-97e4-9db500791100', body: 'Com determinação e coragem' },
    { userId: '07fd8a42-71a9-47ab-b1c4-16ec30971e2c', body: 'Comida picante é a minha paixão 🌶️' },
]

const containerNode = document.querySelector(".container")
// relations = new Map()


function render(usersList,commentsList){
    containerNode.innerText = ''
    for (i of usersList){
        const newUser = document.createElement('div')
        const userAvatar = document.createElement('img')
        userAvatar.src = i.avatar
        newUser.appendChild(userAvatar)

        const userName = document.createElement('h4')
        userName.innerText= i.name
        newUser.appendChild(userName)

        const userBio = document.createElement('span')
        userBio.innerText = i.bio
        newUser.appendChild(userBio)
        // relations.set(usersList.id,commentsList.filter((r) => r.userID===usersList.id))
        
        for (o of commentsList){
            const idOfComment = o.userId
            const idOfUser = i.id

            if(idOfComment === idOfUser){
                const userComments = document.createElement('div')
                userComments.innerText = o.body
                newUser.appendChild(userComments)
                
            }
        }
        containerNode.appendChild(newUser)
    }
}


const commentInput = document.querySelector(".comment")
const submitButton = document.querySelector(".submit")


submitButton.addEventListener('click',() =>{
    let newComment = ''
    newComment = commentInput.textContent
    console.log(newComment)

})

render(users,comments)