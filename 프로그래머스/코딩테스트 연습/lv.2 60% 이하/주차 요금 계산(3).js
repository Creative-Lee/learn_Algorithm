function solution(fees, records) {
	const [defTime, defFee, cutTime, cutFee] = fees
	let fullTime = 24 * 60 - 1

	let parking = {}
	for (let record of records) {
		let [time, num, type] = record.split(' ')
		let [h, m] = time.split(':')
		let totalM = +h * 60 + +m

		if (!parking[num]) parking[num] = 0
		if (type === 'IN') {
			parking[num] += fullTime - totalM
		} else {
			parking[num] -= fullTime - totalM
		}
	}

	let result = [...Object.entries(parking)].map(([num, time]) => {
		if (time <= defTime) return [num, defFee]
		else return [num, defFee + Math.ceil((time - defTime) / cutTime) * cutFee]
	})

	return result.sort((a, b) => a[0] - b[0]).map((e) => e[1])
}
