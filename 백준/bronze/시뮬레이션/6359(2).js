const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => +e.trim())

function solution() {
  let result = []
  for (let tc of tcs) {
    let room = new Array(tc).fill(false)
    for (let i = 1; i <= tc; i++) {
      room = room.map((e, idx) => {
        if ((idx + 1) % i === 0) {
          return !e
        }
        return e
      })
    }

    let open = room.filter((e) => e === true).length
    result.push(open)
  }
  console.log(result.join('\n'))
}

solution()
