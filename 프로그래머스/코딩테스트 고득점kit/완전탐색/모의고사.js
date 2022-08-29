function solution(answers) {
  let answer = [];
  let a = 0;
  let b = 0;
  let c = 0;
  let aPick = [1, 2, 3, 4, 5];
  let bPick = [2, 1, 2, 3, 2, 4, 2, 5];
  let cPick = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((n, idx) => {
    let index = idx >= 5 ? idx % 5 : idx;
    if (n === aPick[index]) a++;
  });
  answers.forEach((n, idx) => {
    let index = idx >= 8 ? idx % 8 : idx;
    if (n === bPick[index]) b++;
  });
  answers.forEach((n, idx) => {
    let index = idx >= 10 ? idx % 10 : idx;
    if (n === cPick[index]) c++;
  });

  let max = Math.max(a, b, c);

  if (a === max) answer.push(1);
  if (b === max) answer.push(2);
  if (c === max) answer.push(3);

  return answer;
}
