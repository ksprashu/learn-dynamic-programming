const process = require('process')

function fibo (n) {
  if (n === 1) return 0
  if (n === 2) return 1
  if (n === 3) return 1

  return fibo(n - 1) + fibo(n - 2)
}

var start = new Date()
console.log(fibo(parseInt(process.argv[2])))
var end = new Date()

console.log('elapsed = ', end - start, ' ms')
