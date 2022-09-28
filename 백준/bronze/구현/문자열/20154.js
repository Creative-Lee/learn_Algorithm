const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let str = fs.readFileSync(file).toString().trim()

function solution() {
  let charCount = {
    A: 3,
    B: 2,
    C: 1,
    D: 2,
    E: 3,
    F: 3,
    G: 3,
    H: 3,
    I: 1,
    J: 1,
    K: 3,
    L: 1,
    M: 3,
    N: 3,
    O: 1,
    P: 2,
    Q: 2,
    R: 2,
    S: 1,
    T: 2,
    U: 1,
    V: 1,
    W: 2,
    X: 2,
    Y: 2,
    Z: 1,
  }
  let countArr = []
  for (let s of str) {
    countArr.push(charCount[s])
  }
  let sum = countArr.reduce((p, c) => p + c)

  console.log(sum % 2 === 0 ? `You're the winner?` : `I'm a winner!`)
}
solution()
