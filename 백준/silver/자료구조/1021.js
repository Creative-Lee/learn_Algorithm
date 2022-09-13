const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [nm, pos] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

let [n, m] = nm.split(' ').map((e) => +e)
pos = pos.split(' ').map((e) => +e)

function solution() {
  class Dequq {
    result = 0
    constructor(size) {
      this.dequq = new Array(size).fill(1)
      this.dequq = this.dequq.map((e, idx) => e + idx)
    }

    shift() {
      this.dequq.shift()
    }
    left() {
      this.dequq.push(this.dequq.shift())
      this.result++
    }
    right() {
      this.dequq.unshift(this.dequq.pop())
      this.result++
    }
    getDirection(target) {
      let idx = this.dequq.indexOf(target)
      let length = this.dequq.length
      let mid = Math.floor(length / 2)
      let isEven = length % 2 === 0 ? true : false

      if (isEven) {
        if (mid === idx || mid < idx) {
          this.right()
        } else {
          this.left()
        }
      } else {
        if (mid === idx || mid > idx) {
          this.left()
        } else {
          this.right()
        }
      }
    }
  }
  let de = new Dequq(n)
  for (let p of pos) {
    while (de.dequq.includes(p)) {
      if (de.dequq[0] === p) {
        de.shift()
      } else {
        de.getDirection(p)
      }
    }
  }

  console.log(de.result)
}

solution()
