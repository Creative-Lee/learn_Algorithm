const fs = require("fs");
let [count, score] = fs.readFileSync("./input.txt").toString().trim().split("\n");

count = +count;
score = score.split(" ").map((num) => +num);

let M = Math.max(...score);

let upScore = score.map((num) => (num / M) * 100);

let average = upScore.reduce((acc, current) => acc + current) / count;

console.log(average);
