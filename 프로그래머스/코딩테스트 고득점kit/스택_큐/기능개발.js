function solution(pp, ss) {
  let answer = pp.reduce((resultArr, p, idx) => {
    let speed = ss[idx];
    let endDate = Math.ceil((100 - p) / speed);
    let result = resultArr[resultArr.length - 1];

    if (result && result[0] >= endDate) {
      result.push(endDate);
    } else {
      resultArr.push([endDate]);
    }
    return resultArr;
  }, []);

  return answer.map((arr) => arr.length);
}
