const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
	let result = []
	let set = new Set(['A', 'B', 'C', 'D', 'E', 'F'])
	for (let tc of tcs) {
		let stack = []
		for (let i = 0; i < tc.length; i++) {
			if (stack[stack.length - 1] && stack[stack.length - 1][0] === tc[i]) {
				stack[stack.length - 1][1]++
			} else {
				stack.push([tc[i], 1])
			}
		}
		if (
			!set.has(stack[0][0]) ||
			!set.has(stack[stack.length - 1][0]) ||
			3 > stack.length ||
			stack.length > 5
		) {
			result.push('Good')
		} else {
			if (stack[0][0] === 'A' && stack[1][0] === 'F' && stack[2][0] === 'C') {
				result.push('Infected!')
			} else if (stack[1][0] === 'A' && stack[2][0] === 'F' && stack[3][0] === 'C') {
				result.push('Infected!')
			} else {
				result.push('Good')
			}
		}
	}

	console.log(result.join('\n'))
}
solution()
