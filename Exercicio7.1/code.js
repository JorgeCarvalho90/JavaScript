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
  formatForm(orders, products)
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
const myFooter = document.querySelector("footer")
const productsForm = document.querySelector("#products_select")
const submitButton = document.querySelector("#submit_button")
fetchAll()

function renderAll(calledOrder, calledProducts) {
  ordersTable.innerHTML = ""

  let calculateAllEUR = 0
  let calculateAllUSD = 0
  let calculateAllGBP = 0

  for (const i of calledOrder) {
    const newLine = document.createElement("tr")

    const addIds = document.createElement("td")
    addIds.innerText = i.id
    newLine.appendChild(addIds)


    const addCurrency = document.createElement("td")
    addCurrency.innerText = i.currency
    newLine.appendChild(addCurrency)


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
      calculateAllEUR += totalOrderValue
    } else {
      const conversionMade = convertPrice(totalOrderValue, "EUR", i.currency)
      addTotalValue.innerText =
        "Conversion from " +
        totalOrderValue +
        "EUR = " +
        conversionMade.toFixed(2) +
        " " +
        i.currency
      if (i.currency === "USD") {
        calculateAllUSD += conversionMade
      } else {
        calculateAllGBP += conversionMade
      }
    }
    newLine.appendChild(addTotalValue)
    ordersTable.appendChild(newLine)
  }

  const addAllValue = document.createElement("span")
  addAllValue.innerHTML =
    "Total Revenue:<p></p> " +
    calculateAllEUR.toFixed(2) +
    "<b>EUR</b> <p></p> " +
    calculateAllUSD.toFixed(2) +
    "<b>USD</b> <p></p> " +
    calculateAllGBP.toFixed(2) +
    "<b>GBP</b>"
  myFooter.appendChild(addAllValue)
}

function formatForm(calledOrder, calledProducts){
  for (const i of calledProducts){
    const addProducts = document.createElement("option")
    addProducts.value = i.name
    addProducts.innerText = i.name
    productsForm.appendChild(addProducts)
  }
}

submitButton.addEventListener('click',(event)=>{

  const myPayload = JSON.stringify({
    "currency": "string",
    "products": [
      {
        "name": "string",
        "quantity": 0
      }
    ]
  })

  fetch("http://116.203.151.6:3000/orders", {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: myPayload
  })


})