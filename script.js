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
  num = 0
  numberElement.textContent = num 
}

function writeText() {
  const textContentElem = document.querySelector("output")
  const textInput = document.querySelector("#input")
  textContentElem.textContent = textContentElem
}