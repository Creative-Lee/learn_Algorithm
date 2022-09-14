const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  class Node {
    constructor(prev, value, next) {
      this.prev = prev
      this.value = value
      this.next = next
    }
  }

  class Queue {
    head = null
    tail = null
    quSize = 0
    result = []

    push(x) {
      if (this.head) {
        let newNode = new Node(this.tail, x, null)
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let newNode = new Node(null, x, null)
        this.head = newNode
        this.tail = newNode
      }
      this.quSize++
    }
    pop() {
      if (this.quSize >= 2) {
        this.result.push(this.head.value)
        let newHead = this.head.next
        this.head = null
        this.head = newHead
        this.quSize--
        return
      }

      if (this.quSize === 1) {
        this.result.push(this.head.value)
        this.head = null
        this.tail = null
        this.quSize--
        return
      }
      this.result.push(-1)
    }
    size() {
      this.result.push(this.quSize)
    }
    empty() {
      if (this.quSize) {
        this.result.push(0)
      } else {
        this.result.push(1)
      }
    }
    front() {
      if (this.head) {
        this.result.push(this.head.value)
      } else {
        this.result.push(-1)
      }
    }
    back() {
      if (this.tail) {
        this.result.push(this.tail.value)
      } else {
        this.result.push(-1)
      }
    }
  }

  let qu = new Queue()
  for (let tc of tcs) {
    let [method, parameter] = tc.split(' ')
    if (parameter) {
      parameter = +parameter
      qu[method](parameter)
    } else {
      qu[method]()
    }
  }
  console.log(qu.result.join('\n'))
}

solution()
