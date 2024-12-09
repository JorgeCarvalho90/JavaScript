let firstName = "Afonso"
let lastName = "Soares"
let age 
let isAStudent = true
let email = null

const isCompleted = Boolean(firstName && lastName && age && isAStudent && email && age !== 0 && isAStudent !== undefined && isAStudent !== null)

firstName = firstName ?? "<em falta>"
lastName = lastName ?? "<em falta>"
age = age ?? "<em falta>"
isAStudent = isAStudent ?? "<em falta>"
email = email ?? "<em falta>"

console.log(`Nome: ${firstName} ${lastName}
Idade: ${age}
Estudante: ${isAStudent}
Email: ${email}
Perfil completo: ${isCompleted}`)