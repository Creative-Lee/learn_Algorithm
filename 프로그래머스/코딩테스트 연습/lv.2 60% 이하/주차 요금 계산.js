function solution(fees, records) {
  let [defTime, defFee, cutTime, cutTimeFee] = fees
  let parking = {}

  let fullTime = 23 * 60 + 59

  for (let record of records) {
    let [time, carNum, type] = record.split(' ')
    let [h, m] = time.split(':')
    let totalM = +h * 60 + +m
    let parkingTime

    if (!parking[carNum]) parking[carNum] = 0
    if (type === 'IN') {
      parking[carNum] += fullTime - totalM
    } else {
      parking[carNum] -= fullTime - totalM
    }
  } // 기본 처리 끝
  let result = []
  for (let [carNum, time] of Object.entries(parking)) {
    if (defTime >= time) {
      result.push([carNum, defFee])
      continue
    } else {
      result.push([carNum, defFee + Math.ceil((time - defTime) / cutTime) * cutTimeFee])
    }
  }
  return result.sort((a, b) => +a[0] - +b[0]).map((e) => e[1])
}

// 입차 후 기록 없으면 23:59 출차 처리
// 입 출차 여러번 가능
// 최소 1분 주차
// 차량번호 작은 순으로 청구요금 return
// 누적시간으로 일괄 계산

// 시간은 분으로 환산해서 계산 --> 출차시간 - 입차시간 = 총 주차 시간
// map에 번호,시각 형식으로 입차 저장
// 출차시 해당 차량번호 get 해서 시간 비교
// map에 남아있는 것은 출차 안한 것이므로 23:59 출차 계산
