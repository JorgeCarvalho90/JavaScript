const orders = [
    { id: 'A658', status: 'draft', products: ['T-Shirt', 'Polo'] },
    { id: 'A446', status: 'processing', products: ['T-Shirt'] },
    { id: 'A883', status: 'draft', products: ['Polo', 'Polo'] },
    { id: 'A234', status: 'processing', products: ['Camisa', 'Saia'] },
    { id: 'A754', status: 'cancelled', products: ['Saia'] },
    { id: 'A236', status: 'shipped', products: ['Sweatshirt', 'Vestido'] },
    { id: 'A467', status: 'processing', products: ['Camisa', 'Saia'] },
    { id: 'A213', status: 'cancelled', products: ['Vestido', 'Top'] },
    { id: 'A783', status: 'processing', products: ['T-Shirt', 'Polo'] },
    { id: 'A364', status: 'shipped', products: ['T-Shirt', 'Polo'] },
  ]


const ordersTable = document.querySelector('tbody')

for (const i of orders){
    const newLine = document.createElement('tr')

    const addIds = document.createElement('td')
    addIds.innerText = i.id
    newLine.appendChild(addIds)

    const addStatus = document.createElement('td')
    addStatus.innerText = i.status
    switch (i.status) {
        case 'draft':
            addStatus.style.color = 'blue';
            break;
        case 'processing':
            addStatus.style.color = 'orange';
            break;
        case 'shipped':
            addStatus.style.color = 'green';
            break;
        case 'cancelled':
            addStatus.style.color = 'red';
            break;
    }
    newLine.appendChild(addStatus)

    const addProducts = document.createElement('td')
    const addList = document.createElement('ul')

    for (const o of i.products) {
        const listItem = document.createElement('li')
        listItem.innerText = o
        addList.appendChild(listItem)
    }

    addProducts.appendChild(addList)
    newLine.appendChild(addProducts)

    ordersTable.appendChild(newLine)
}
