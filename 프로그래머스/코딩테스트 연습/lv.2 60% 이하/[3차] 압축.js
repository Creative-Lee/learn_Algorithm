function solution(msg) {
	let map = new Map()
	let result = []

	for (let i = 1; i <= 26; i++) {
		map.set(String.fromCharCode(64 + i), i) // 사전 초기화
	}

	while (msg.length) {
		for (let i = msg.length; i > 0; i--) {
			let sliced = msg.slice(0, i) // msg 원본부터 1글자까지 찾는다.
			if (map.has(sliced)) {
				// 찾으면
				result.push(map.get(sliced)) // 색인번호 푸시
				let removed = msg.substring(0, i) // 제거된 문자열
				msg = msg.substring(i) // 실제로 msg에서 문자열 제거
				if (msg.length >= 1) {
					// 처리되지 않은 글자가 남아있다면
					map.set(removed + msg[0], map.size + 1) // (제거된 문자열 + msg의 맨앞 문자)를 사전에 추가
				}
				break // 작업 끝났으면 더이상 찾을 필요가 없다.
			}
		}
	}
	return result
}
