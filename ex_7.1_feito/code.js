const bodyNode = document.querySelector('body')
const tableBodyNode = document.querySelector('tbody')
const productsListSelectNode = document.querySelector('#products-list-select')

let tempFormProducts = []

const conversionRates = {
  EUR: 1,
  USD: 1.05,
  GBP: 0.83,
}

function convertPrice(amount, fromCurrency, toCurrency) {
  const fromRate = conversionRates[fromCurrency]
  const toRate = conversionRates[toCurrency]
  const rate = toRate / fromRate

  return amount * rate
}

async function fetchAll() {
  const removeLoading = renderLoading()

  const ordersResponse = await fetch('http://116.203.151.6:3000/orders')
  const orders = await ordersResponse.json()

  const productsResponse = await fetch('http://116.203.151.6:3000/products')
  const catalog = await productsResponse.json()

  removeLoading()
  renderTable(orders, catalog)

  for (const product of catalog) {
    const optionNode = document.createElement('option')
    optionNode.value = product.name
    optionNode.innerText = product.name

    productsListSelectNode.appendChild(optionNode)
  }
}

function renderLoading() {
  const loadingWrapperNode = document.createElement('div')
  loadingWrapperNode.classList.add('loading')

  const loadingNode = document.createElement('h3')
  loadingNode.innerText = 'Loading...'

  loadingWrapperNode.appendChild(loadingNode)
  bodyNode.appendChild(loadingWrapperNode)

  return () => {
    bodyNode.removeChild(loadingWrapperNode)
  }
}

function createOrderRowNode(order) {
  const orderRowNode = document.createElement('tr')
  const orderIdNode = document.createElement('td')
  const orderCurrencyNode = document.createElement('td')
  const orderStatusNode = document.createElement('td')
  const orderProductsNode = document.createElement('td')
  const orderPriceNode = document.createElement('td')

  const statusBox = createOrderStatusNode(order.status)
  const productsList = createOrderProductsNode(order.products)

  orderIdNode.innerText = order.id
  orderCurrencyNode.innerText = order.currency
  orderStatusNode.appendChild(statusBox)
  orderProductsNode.appendChild(productsList)
  orderPriceNode.innerText = formatPrice(order.price, order.currency)

  orderRowNode.appendChild(orderIdNode)
  orderRowNode.appendChild(orderCurrencyNode)
  orderRowNode.appendChild(orderStatusNode)
  orderRowNode.appendChild(orderProductsNode)
  orderRowNode.appendChild(orderPriceNode)

  return orderRowNode
}

function createOrderStatusNode(status) {
  const boxNode = document.createElement('div')
  boxNode.innerText = status
  boxNode.classList.add('status')

  switch (status) {
    case 'draft':
      boxNode.classList.add('info')
      break
    case 'processing':
      boxNode.classList.add('warning')
      break
    case 'shipped':
      boxNode.classList.add('success')
      break
    case 'cancelled':
      boxNode.classList.add('error')
      break
    default:
      boxNode.style.backgroundColor = 'grey'
  }

  return boxNode
}

function createOrderProductsNode(orderProducts) {
  const ulNode = document.createElement('ul')

  for (const orderProduct of orderProducts) {
    const liNode = document.createElement('li')
    liNode.innerText = `${orderProduct.name} x${orderProduct.quantity}`

    ulNode.appendChild(liNode)
  }

  return ulNode
}

function renderTable(orders, catalog) {
  const { orders: fullOrders, totalsByCurrency } = aggregateFullOrders(
    orders,
    catalog
  )

  tableBodyNode.innerHTML = ''

  for (const order of fullOrders) {
    const rowNode = createOrderRowNode(order)

    tableBodyNode.appendChild(rowNode)
  }

  const totalOrdersNode = document.querySelector('#total-orders')
  const totalPriceNode = document.querySelector('#total-price')

  let totalsHtml = ''
  for (const [k, v] of Object.entries(totalsByCurrency)) {
    totalsHtml += `<p><b>${k}</b>: ${formatPrice(v, k)}</p>`
  }

  totalOrdersNode.innerText = `${fullOrders.length} encomendas`
  totalPriceNode.innerHTML = totalsHtml
}

function renderProductsList() {
  const listNode = document.querySelector('#products-list')
  listNode.innerHTML = ''

  for (const product of tempFormProducts) {
    const productNode = document.createElement('li')
    productNode.innerText = `${product.name} x${product.quantity}`

    listNode.appendChild(productNode)
  }
}

function aggregateFullOrders(orders, catalog) {
  let totalsByCurrency = {}

  for (const order of orders) {
    let totalPrice = 0

    for (const orderProduct of order.products) {
      const catalogProduct = catalog.find((cp) => cp.name === orderProduct.name)

      const price = catalogProduct.price * orderProduct.quantity
      const convertedPrice = convertPrice(
        price,
        catalogProduct.currency,
        order.currency
      )

      orderProduct.price = convertedPrice

      totalPrice += convertedPrice
    }

    order.price = totalPrice

    totalsByCurrency[order.currency] =
      (totalsByCurrency[order.currency] ?? 0) + totalPrice
  }

  return { orders, totalsByCurrency }
}

function formatPrice(amount, currency) {
  return new Intl.NumberFormat('en', { style: 'currency', currency }).format(
    amount
  )
}

fetchAll()

const formNode = document.querySelector('form')
const addProductButton = document.querySelector('#add-product')

addProductButton.addEventListener('click', () => {
  const formData = new FormData(formNode)

  const newProduct = {
    name: formData.get('productName'),
    quantity: Number(formData.get('productQuantity')),
  }

  tempFormProducts.push(newProduct)
  renderProductsList()
})

formNode.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(formNode)

  const currency = formData.get('currency')
  const products = tempFormProducts

  const payload = JSON.stringify({ currency, products })

  // Send data
  const response = await fetch('http://116.203.151.6:3000/orders',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    })

  // Refresh table
  await fetchAll()

  // Reset form
  formNode.reset()
  tempFormProducts = []
  renderProductsList()
})
