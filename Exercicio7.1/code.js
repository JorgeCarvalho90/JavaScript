async function fetchOrders() {
  const orders = await fetch("http://116.203.151.6:3000/orders")
  return await orders.json()
}

async function fetchProducts() {
  const pro = await fetch("http://116.203.151.6:3000/products")
  return await pro.json()
}

async function fetchAll() {
  const orders = await fetchOrders()
  const products = await fetchProducts()
  renderAll(orders, products)
  //   callPrices(products)
}

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

const ordersTable = document.querySelector("tbody")
fetchAll()

function renderAll(calledOrder, calledProducts) {
  ordersTable.innerHTML = ""

  for (const i of calledOrder) {
    const newLine = document.createElement("tr")

    const addCurrency = document.createElement("td")
    addCurrency.innerText = i.currency
    newLine.appendChild(addCurrency)

    const addIds = document.createElement("td")
    addIds.innerText = i.id
    newLine.appendChild(addIds)

    const addStatus = document.createElement("td")
    addStatus.innerText = i.status
    switch (i.status) {
      case "draft":
        addStatus.style.color = "blue"
        break
      case "processing":
        addStatus.style.color = "orange"
        break
      case "shipped":
        addStatus.style.color = "green"
        break
      case "cancelled":
        addStatus.style.color = "red"
        break
    }
    newLine.appendChild(addStatus)

    const addProducts = document.createElement("td")
    const addList = document.createElement("ul")

    let totalOrderValue = 0

    for (const o of i.products) {
      const listItem = document.createElement("li")
      listItem.innerText = o.name + " (" + o.quantity + ")"
      addList.appendChild(listItem)

      for (const x of calledProducts) {
        if (o.name === x.name) {
          const addValue = document.createElement("td")
          addValue.innerText =
            "Price per piece = " + x.price + " " + x.currency
          addList.appendChild(addValue)

          const addValueSum = document.createElement("td")
          const productTotalValue = x.price * o.quantity
          addValueSum.innerText =
            "Total value = " + productTotalValue.toFixed(2) + " " + x.currency
          addList.appendChild(addValueSum)

          totalOrderValue += productTotalValue
        }
      }
    }
    addProducts.appendChild(addList)
    newLine.appendChild(addProducts)

    const addTotalValue = document.createElement("td")

    if (i.currency === "EUR") {
      addTotalValue.innerText =
        "Total Value = " + totalOrderValue.toFixed(2) + " " + i.currency
    } else {
      const conversionMade = convertPrice(totalOrderValue, "EUR", i.currency)
      addTotalValue.innerText ="Conversion from " + totalOrderValue + "EUR = " + conversionMade.toFixed(2) + " " + i.currency
    }

    newLine.appendChild(addTotalValue)

    ordersTable.appendChild(newLine)
  }
}
