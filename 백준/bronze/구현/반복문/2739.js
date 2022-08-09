const fs = require("fs")
const num = Number(fs.readFileSync("/dev/stdin"))

for(let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num*i}`)
}


