const fs = require("fs")
const [H,M] = fs.readFileSync("/dev/stdin").toString().split(" ").map(T=>Number(T))


const setH = Math.floor((H * 60 + M - 45) /60)
const setM = (H * 60 + M - 45) % 60


if(setH < 0 || setM < 0){
    console.log(`${24+setH} ${60+setM}`)
}
else{
    console.log(`${setH} ${setM}`)
}
