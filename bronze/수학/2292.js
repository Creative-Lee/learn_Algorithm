const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  let beforeRoomLastNum = 0
  let currentRoomLastNum = 1
  let roomCount = 1
  while(true){
    if(beforeRoomLastNum < input && input <= currentRoomLastNum){
      break
    }
    beforeRoomLastNum = currentRoomLastNum
    currentRoomLastNum = currentRoomLastNum + 6*roomCount    
    roomCount++
  }
  console.log(roomCount)
}
solution();
