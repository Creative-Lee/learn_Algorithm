const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n')
let [N , M] = input.shift().split(' ').map(E => E = Number(E))
let J = input.map(E => E = Number(E))

function solve(arr){
	let maxSubArrSum = 0
	let subArrSum = 0

	for(let num of arr){

		subArrSum += num

		if(subArrSum < 0){
			subArrSum = 0
		}

		maxSubArrSum = Math.max(maxSubArrSum,subArrSum)
	}
	return maxSubArrSum
}

console.log(solve(J))







