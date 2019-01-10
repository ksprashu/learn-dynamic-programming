const process = require('process')

function fibo (n) {
  let a = 0
  let b = 1

  if (n === 1) return a
  if (n === 2) return b

  for (let i = 3; i <= n; i++) {
    let c = b
    b = a + b
    a = c
  }

  return b
}

var start = new Date()
console.log(fibo(parseInt(process.argv[2])))
var end = new Date()

console.log('elapsed = ', end - start, ' ms')
