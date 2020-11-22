let h3 = document.querySelector("h3")
let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let body = document.getElementById("gradient")
let randomButton = document.getElementById("randomColor")

console.log(h3, color1, color2)

//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function setRandomGradient() {
  color1.value = getRandomColor()
  color2.value = getRandomColor()
  console.log("click")
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
  h3.innerText = `"${body.style.background}"`
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
  h3.innerText = `"${body.style.background}"`
}

setGradient()

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomButton.addEventListener("click", setRandomGradient)
