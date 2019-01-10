const process = require('process')
let fibs = []

fibs[0] = 0
fibs[1] = 1
fibs[2] = 1

function fibo (n) {
  if (!fibs[n - 1]) { fibs[n - 1] = fibo(n - 1) + fibo(n - 2) }
  return fibs[n - 1]
}

var start = new Date()
console.log(fibo(parseInt(process.argv[2])))
var end = new Date()

console.log('elapsed = ', end - start, ' ms')
