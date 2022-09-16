function solution(id) {
  let stack = []

  let sp = '~!@#$%^&*()=+[{]}:?,<>/'
  let banS = new Set(sp.split(''))

  for (let i = 0; i < id.length; i++) {
    if (banS.has(id[i])) continue // 2
    if (id[i] === '.' && stack[stack.length - 1] === '.') continue // 3
    stack.push(id[i].toLowerCase()) // 1
  }

  let str = stack.join('')
  if (str[0] === '.') str = str.substring(1) // 4
  if (str[str.length - 1] === '.') str = str.substring(0, str.length - 1) // 4
  if (!str) str = 'a' // 5
  if (str.length > 15) str = str.substring(0, 15) // 6
  if (str[str.length - 1] === '.') str = str.substring(0, str.length - 1) // 6
  if (str.length <= 2) {
    // 7
    let last = str[str.length - 1]
    str += last.repeat(3 - str.length)
  }
  return str
}
