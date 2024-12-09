const password = 'coisas2024%'

const hasSpecialCharacter = password.includes('<') || password.includes('?')  || password.includes('%')
const hasMoreThan8 = password.length > 8
const hasCapitalLetters = password.toLowerCase !== password

const checkPassword = hasSpecialCharacter && hasMoreThan8 && hasCapitalLetters

console.log(checkPassword)