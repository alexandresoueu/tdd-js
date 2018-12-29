function sum(a, b) {
  return a + b
}

//named export
//have to various exports into one file
//same file
//only can called to the same to name
//import needs to the keys { sub }
export function sub(a, b) {
  return a - b
}

function mult(a, b) {
  return a * b
}

function div(a, b) {
  return a / b
}

const PI = 3.14

export { mult as multiplication, div, PI }


//method default
//only one default per file
//import with qq name
//don't need util the keys
export default sum