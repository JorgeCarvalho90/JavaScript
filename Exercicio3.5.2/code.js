const users = [
    {email:'carlos@gmail.com', name: 'Carlos Sousa'},
    {email:'susana@gmail.com', name: 'Susana Tavares'},
    {email:'sergio@gmail.com', name: 'Sérgio Tavares'}
]

function getUser(userEmail){
    let count = 0

    while (count < users.length){

        if (users[count].email === userEmail){
            return users[count]
        }
       
        count += 1
    }
}

console.log(getUser('sergio@gmail.com'))