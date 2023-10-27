function windowClose() {
  window.close()
}

function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  const clr = document.getElementById("bgColor")
  const clrSelect = clr.value
  body.style.backgroundColor = clrSelect
}

function deleteText() {
  const ToDeleteELem = document.querySelector("#to-delete")
  ToDeleteELem.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num 
}

function resetCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  numberElement.textContent = 0
}

function writeText() {
  const input = document.querySelector("#input")
  const inputText = input.value
  const output = document.querySelector("#output")
  const outputBefore = output.textContent
 
  output.textContent = outputBefore + "\n" + inputText 
}


function customBackground() {
  const bar = document.querySelector("#bar")

  const red = parseInt(document.querySelector("#redSlider").value)
  const green = parseInt(document.querySelector("#greenSlider").value)
  const blue = parseInt(document.querySelector("#blueSlider").value)

  bar.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  bar.style.color = `rgb(${255-red}, ${255-green}, ${255-blue})`

}

function pickRandomColor() {
  const colorList = ["red", "green", "blue"]
  const randomIndex = Math.floor(Math.random()*colorList.length)
  const randomColor = colorList[randomIndex];

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  const bodyElem = document.querySelector("body")
  bodyElem.style.background = `rgb(${red}, ${green}, ${blue})`
}

let intervalID = null

function changeInterval() {


  if (intervalID) clearInterval(intervalID)
  const sliderValue = parseInt(document.querySelector("#intervalSlider").value)
  const speed = sliderValue

  intervalID = setInterval(pickRandomColor, speed)

  const numElement = document.querySelector("#numElem")
  numElement.textContent = speed
}




//var rred = 0
//var ggreen = 0
//var bblue = 0

//function fadeColor() {
  //var rred = rred + 1

  //if (rred = 256) {
  //  var rred = 0
  //  var ggreen = ggreen + 1
  //}

  //if (ggreen = 256) {
  //  var rred = 0
  //  var ggreen = 0
  //  var bblue = bblue + 1
  //}

  //const bodyElem = document.querySelector("body")
  //bodyElem.style.background = `rgb(${rred}, ${ggreen}, ${bblue})`
//}

//setInterval(colorFade, 30)