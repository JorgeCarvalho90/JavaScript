const initialDate = new Date('2024-11-02')


function addWeek (date = new Date()) {
    const dateAfter7Days = new Date(+date + 604800000)
    return dateAfter7Days
}

const resolveDate = addWeek(initialDate || new Date())

console.log(resolveDate.toLocaleDateString('pt-PT'))