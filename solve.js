// const fs = require('fs')
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
// let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

// tcc = +tcc
// tcs = tcs.map((e) => e.trim())

function solution() {
  let n = 10
  let prime = []
  for (let i = 2; i < n; i++) {
    if (n % i === 0) continue
  }
  console.log(prime)
}

solution()
