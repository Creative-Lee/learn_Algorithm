function solution(fees, records) {
  let [defTime, defFee, cutTime, cutTimeFee] = fees
  let parking = new Map()
  let totalParkingTimes = new Map()
  let fullTime = 23 * 60 + 59
  for (let record of records) {
    let [time, carNum, type] = record.split(' ')
    let [h, m] = time.split(':')
    let totalM = +h * 60 + +m
    let inTime
    let outTime
    let parkingTime
    let fee
    if (type === 'IN') {
      parking.set(carNum, totalM)
    } else {
      inTime = parking.get(carNum)
      outTime = totalM
      parkingTime = outTime - inTime

      if (defTime >= parkingTime) {
        fee = defFee
      } else {
        fee = defFee + Math.ceil((parkingTime - defTime) / cutTime) * cutTimeFee
      }
      totalParkingTimes.set(carNum, totalParkingTimes.get(carNum) + parkingTime || parkingTime)
      parking.delete(carNum)
    }
  } // 기본 처리 끝

  let restCar = [...parking.entries()] //출차 안 한 차 처리
  for (let car of restCar) {
    let [carNum, inTime] = car
    let parkingTime = fullTime - inTime
    totalParkingTimes.set(carNum, totalParkingTimes.get(carNum) + parkingTime || parkingTime)
  }

  let carEntries = [...totalParkingTimes.entries()]
  carEntries.sort((a, b) => +a[0] - +b[0])

  let eachFees = carEntries.map((e) => {
    let fee
    let totalM = e[1]
    if (defTime >= totalM) {
      return defFee
    } else {
      fee = defFee + Math.ceil((totalM - defTime) / cutTime) * cutTimeFee
      return fee
    }
  })

  return eachFees
}

// 입차 후 기록 없으면 23:59 출차 처리
// 입 출차 여러번 가능
// 최소 1분 주차
// 차량번호 작은 순으로 청구요금 return

// 시간은 분으로 환산해서 계산 --> 출차시간 - 입차시간 = 총 주차 시간
// map에 번호,시각 형식으로 입차 저장
// 출차시 해당 차량번호 get 해서 시간 비교
// map에 남아있는 것은 출차 안한 것이므로 23:59 출차 계산
