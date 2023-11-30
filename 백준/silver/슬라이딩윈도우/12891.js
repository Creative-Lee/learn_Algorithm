const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [sp, DNA_STRING, SUB_DNA] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const [s, p] = sp.split(' ').map(Number)
  const DNA = ['A', 'C', 'G', 'T']
  const DNAMap = new Map()
  const subDNAMap = new Map()
  let subDNA = DNA_STRING.slice(0, p)

  subDNA.split('').forEach(v => DNAMap.set(v, (DNAMap.get(v) ?? 0) + 1))
  SUB_DNA.split(' ').forEach((v, idx) => subDNAMap.set(DNA[idx], Number(v)))

  let p1 = 0
  let p2 = p
  let count = 0

  const isDNAString = () => DNA.every(v => (DNAMap.get(v) ?? 0) >= (subDNAMap.get(v) ?? 0))

  if (isDNAString()) count += 1

  for (let i = 0; i < s - p; i += 1) {
    const removed = DNA_STRING[p1]
    const added = DNA_STRING[p2]

    DNAMap.set(removed, DNAMap.get(removed) - 1)
    DNAMap.set(added, (DNAMap.get(added) ?? 0) + 1)

    if (isDNAString()) count += 1

    p1 += 1
    p2 += 1
  }

  return count
}

console.log(solution())
