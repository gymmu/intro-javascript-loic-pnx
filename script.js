function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
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

