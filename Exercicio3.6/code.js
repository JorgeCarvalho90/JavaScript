const usersList = ['João', 'Carlos', 'joaquim', 'Sílvia', 'Ana', 'Maria']

const starts = usersList.filter((letter) => letter.startsWith('J') || letter.startsWith('j'))

console.log(starts)

const moreThan6 = usersList.filter((u) => u.length > 6)

console.log(moreThan6)

const transformUpper = usersList.map((upper) => upper.toUpperCase())

console.log(transformUpper)

const howManyLetters = usersList.join('').length

console.log(howManyLetters)