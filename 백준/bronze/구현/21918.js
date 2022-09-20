const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [NM, light, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

let [N, M] = NM.trim()
  .split(' ')
  .map((e) => +e)
light = light
  .trim()
  .split(' ')
  .map((e) => +e)
let state = new Array(N).fill(false)
state = state.map((e, idx) => (light[idx] === 1 ? true : false))
tcs = tcs.map((e) => e.trim())

function solution() {
  for (let tc of tcs) {
    let [process, a, b] = tc.split(' ').map((e) => +e)

    switch (process) {
      case 1:
        {
          state[a - 1] = b === 1 ? true : false
        }
        break
      case 2:
        {
          for (let i = a; i <= b; i++) {
            state[i - 1] = !state[i - 1]
          }
        }
        break
      case 3:
        {
          for (let i = a; i <= b; i++) {
            state[i - 1] = false
          }
        }
        break
      case 4: {
        for (let i = a; i <= b; i++) {
          state[i - 1] = true
        }
      }
    }
  }
  state = state.map((e) => (e ? 1 : 0))
  console.log(state.join(' '))
}

solution()
