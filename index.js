function sumNmubers(event){
event.preventDefault()
const number1 = event.target.add.valueAsNumber
const number2 = event.target.add2.valueAsNumber
const sum = number1 + number2
const h2 = document.querySelector('h2')
const output = (" the sum as " + number1 + " + " + number2 + " = " + sum)
console.log(output)
h2.innerText = output
}

const form = document.querySelector('form')
form.addEventListener('submit', sumNmubers)
