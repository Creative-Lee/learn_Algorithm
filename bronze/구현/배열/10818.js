const fs = require("fs");
let [L1,L2] = fs.readFileSync("./input.txt").toString().trim().split('\n')

L1 = +(L1.trim())
L2 = L2.split(' ').map(E => E = Number(E))

const MAX = Math.max(...L2)
const MIN = Math.min(...L2)



console.log(`${MIN} ${MAX}`)

