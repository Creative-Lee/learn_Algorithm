function solution(msg) {
	let map = new Map()
	let result = []

	for (let i = 0; i < 26; i++) {
		map.set(String.fromCharCode(65 + i), i + 1)
	}

	while (msg.length) {
		for (let i = msg.length; i > 0; i--) {
			let slicedMsg = msg.slice(0, i)
			if (map.has(slicedMsg)) {
				result.push(map.get(slicedMsg))
				msg = msg.slice(i, msg.length)
				if (msg.length && !map.has(slicedMsg + msg[0])) {
					map.set(slicedMsg + msg[0], map.size + 1)
				}
				break
			}
		}
	}

	return result
}
