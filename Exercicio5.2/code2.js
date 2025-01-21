const orders = [
    { id: 'A658', status: 'Draft', products: ['T-Shirt', 'Polo'] },
    { id: 'A446', status: 'Processing', products: ['T-Shirt'] },
    { id: 'A883', status: 'Draft', products: ['Polo', 'Polo'] },
    { id: 'A234', status: 'Processing', products: ['Camisa', 'Saia'] },
    { id: 'A754', status: 'Cancelled', products: ['Saia'] },
    { id: 'A236', status: 'Shipped', products: ['Sweatshirt', 'Vestido'] },
    { id: 'A467', status: 'Processing', products: ['Camisa', 'Saia'] },
    { id: 'A213', status: 'Cancelled', products: ['Vestido', 'Top'] },
    { id: 'A783', status: 'Processing', products: ['T-Shirt', 'Polo'] },
    { id: 'A364', status: 'Shipped', products: ['T-Shirt', 'Polo'] },
]

const orders2 = [
    { id: 'A669', status: 'Draft', products: ['T-Shirt', 'Polo'] },
    { id: 'A446', status: 'Processing', products: ['T-Shirt'] },
    { id: 'A883', status: 'Draft', products: ['Polo', 'Polo'] },
    { id: 'A234', status: 'Processing', products: ['Camisa', 'Saia'] },
    { id: 'A754', status: 'Cancelled', products: ['Saia'] },
    { id: 'A236', status: 'Shipped', products: ['Sweatshirt', 'Vestido'] },
    { id: 'A467', status: 'Processing', products: ['Camisa', 'Saia'] },
    { id: 'A213', status: 'Cancelled', products: ['Vestido', 'Top'] },
    { id: 'A783', status: 'Processing', products: ['T-Shirt', 'Polo'] },
    { id: 'A364', status: 'Shipped', products: ['T-Shirt', 'Polo'] },
]


const ordersTable = document.querySelector('tbody')


function callOrder(calledOrder){
    ordersTable.innerHTML = ""

    for (const i of calledOrder){
        const newLine = document.createElement('tr')

        const addIds = document.createElement('td')
        addIds.innerText = i.id
        newLine.appendChild(addIds)

        const addStatus = document.createElement('td')
        addStatus.innerText = i.status
        switch (i.status) {
            case 'Draft':
                addStatus.style.color = 'blue'
                break
            case 'Processing':
                addStatus.style.color = 'orange'
                break
            case 'Shipped':
                addStatus.style.color = 'green'
                break
            case 'Cancelled':
                addStatus.style.color = 'red'
                break
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
}
