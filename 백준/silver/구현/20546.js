const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [cash, prices] = fs.readFileSync(file).toString().trim().split('\n')

cash = +cash
prices = prices.split(' ').map((e) => +e)

function solution() {
  let [m1, m2] = [cash, cash]
  let [stockCount1, stockCount2] = [0, 0]

  for (let i = 0; i < 14; i++) {
    if (m1 >= prices[i]) {
      let buyCount = Math.floor(m1 / prices[i])
      let buyCost = buyCount * prices[i]
      stockCount1 += buyCount
      m1 -= buyCost
    }
  }

  for (let i = 3; i < 14; i++) {
    if (
      prices[i - 3] > prices[i - 2] &&
      prices[i - 2] > prices[i - 1] &&
      prices[i - 1] > prices[i]
    ) {
      let buyCount = Math.floor(m2 / prices[i])
      let buyCost = buyCount * prices[i]
      stockCount2 += buyCount
      m2 -= buyCost
      continue
    }
    if (
      prices[i - 3] < prices[i - 2] &&
      prices[i - 2] < prices[i - 1] &&
      prices[i - 1] < prices[i] &&
      stockCount2
    ) {
      let sellCost = stockCount2 * prices[i]
      stockCount2 = 0
      m2 += sellCost
    }
  }

  let result1 = m1 + stockCount1 * prices[13]
  let result2 = m2 + stockCount2 * prices[13]

  let winner = result1 > result2 ? 'BNP' : result1 < result2 ? 'TIMING' : 'SAMESAME'

  console.log(winner)
}

solution()
