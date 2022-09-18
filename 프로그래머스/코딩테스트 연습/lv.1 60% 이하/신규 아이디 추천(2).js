function solution(id) {
  id = id.toLowerCase()
  let sp = '~!@#$%^&*()=+[{]}:?,<>/'
  let spSet = new Set(sp.split(''))

  let stack = []

  for (let str of id) {
    if (str === '.' && stack[stack.length - 1] === '.') continue
    if (spSet.has(str)) continue
    stack.push(str)
  }
  let str = stack.join('')
  if (str[0] === '.') str = str.substring(1)
  if (str[str.length - 1] === '.') str = str.substring(0, str.length - 1)
  if (!str) str = 'a'
  if (str.length > 15) str = str.substring(0, 15)
  if (str[str.length - 1] === '.') str = str.substring(0, str.length - 1)
  if (str.length <= 2) {
    str += str[str.length - 1].repeat(3 - str.length)
  }
  return str
}
