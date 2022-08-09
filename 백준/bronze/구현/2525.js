const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [h, m] = input[0].split(" ").map((str) => +str);
let ct = +input[1];

let totalM = h * 60 + m;

let done = totalM + ct;

function getResult() {
  let m = 0;
  let h = 0;

  if (done >= 1440) {
    h = (done - 1440) / 60;
    m = (done - 1440) % 60;

    console.log(`${Math.floor(h)} ${m}`);
    return;
  }

  h = done / 60;
  m = done % 60;
  console.log(`${Math.floor(h)} ${m}`);
}

getResult();
