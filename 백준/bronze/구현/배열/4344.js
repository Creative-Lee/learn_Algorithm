const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input = input.map((e) => e.trim());

const tcc = +input[0];
const split = input.slice(1).map((line) => line.split(" "));
const sc = split.map((lineArr) => +lineArr[0]);
const scores = split.map((lineArr) => lineArr.slice(1).map((str) => +str));
let index = 0;

const average = scores
  .map((lineArr) => lineArr.reduce((acc, current) => acc + current), 0)
  .map((sum) => {
    let average = sum / sc[index];
    index++;
    return average;
  });

const bestStudent = scores.map(
  (lineArr, index) => lineArr.filter((score) => score > average[index]).length
);

const bsPercent = bestStudent.map((bsc, index) => (bsc / sc[index]) * 100);

for (let i = 0; i < bsPercent.length; i++) {
  console.log(`${bsPercent[i].toFixed(3)}%`);
}
