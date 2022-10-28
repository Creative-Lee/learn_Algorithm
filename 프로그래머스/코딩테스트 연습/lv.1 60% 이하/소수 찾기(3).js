function solution(n) {
	let set = new Set()
	for (let i = 2; i <= n; i++) {
		set.add(i)
	}

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (set.has(i)) {
			for (let j = i * 2; j <= n; j += i) {
				set.delete(j)
			}
		}
	}

	return set.size
}
