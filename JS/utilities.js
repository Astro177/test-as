// blog page connection
document.getElementById("blogs-btn").addEventListener("click", function () {
  window.location.href = "blogs.html"
})

function getColor() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// document.getElementsByClassName("shape-card").addEventListener("mouseover", function () {
//   document.body.style.backgroundColor = getColor()
// })

// get inner-text function
function shapeText(id) {
  const text = document.getElementById(id).innerText
  return text
}

// get input-value function
function shapeValue(id) {
  const value = document.getElementById(id).value
  return value
}

/**
 * @param {string} outputId
 * @param {"m" | "cm"} from
 * @param {"m" | "cm" | "inch"} to
 * @param {number} value
 */
function convertMetrics(outputId, from = "cm", to = "m", value) {
  const outputElement = document.getElementById(outputId)
  const newValue = value / 1000
  outputElement.innerText = newValue.toString()
}

// show result function
function showResults(shapeName, shapeArea) {
  const container = document.getElementById("result-container")
  const tr = document.createElement("tr")
  const serialTd = document.createElement("td")
  const shapeNameTd = document.createElement("td")
  const shapeAreaTd = document.createElement("td")
  const calcValue = document.createElement("span")
  const shapeConverterBtn = document.createElement("button")

  serialTd.innerText = serial
  shapeNameTd.innerText = shapeName
  calcValue.innerText = shapeArea
  calcValue.id = shapeName

  shapeConverterBtn.classList.add(..."ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer".split(" "))
  shapeConverterBtn.innerText = "Convert Value"
  shapeConverterBtn.onclick = () => convertMetrics(shapeName, "cm", "m", shapeArea)
  shapeAreaTd.appendChild(calcValue)
  shapeAreaTd.appendChild(shapeConverterBtn)

  tr.appendChild(serialTd)
  tr.appendChild(shapeNameTd)
  tr.appendChild(shapeAreaTd)

  container.appendChild(tr)
}

function getRandomColor() {
  let colorCode = "#"
  const hexes = "0123456789ABCDEF"
  for (let i = 0; i < 3; i++) {
    const a = hexes[Math.floor(Math.random() * hexes.length)]
    const b = hexes[Math.floor(Math.random() * hexes.length)]
    colorCode += a + b
  }
  return colorCode
}

const className = ".custom-hover"
const fallbackColor = "#fff"
const elements = document.querySelectorAll(className)

elements.forEach((el) => {
  // to add the colors
  el.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = getRandomColor()
  })

  // to reset the color
  el.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = fallbackColor
  })
})
