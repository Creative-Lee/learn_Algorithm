const fs = require("fs")
const [H,M] = fs.readFileSync("input.txt").toString().split(" ").map(T=>Number(T))


const setH = Math.floor((H * 60 + M - 45) /60)
const setM = (H * 60 + M - 45) % 60

const set1 = (H * 60 + M - 45)

console.log(set1)








