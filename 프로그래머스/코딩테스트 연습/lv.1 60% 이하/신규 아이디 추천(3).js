function solution(id) {
  return pipe([step1, step2, step3, step4, step5, step6, step7], id)
}

const step1 = id => id.toLowerCase()
const step2 = id => {
  const removeTargetStr = new Set('~!@#$%^&*()=+[{]}:?,<>/')
  return [...id].filter(str => !removeTargetStr.has(str)).join('')
}
const step3 = id => id.replace(/\.+/g, '.')

const step4 = id => {
  if (id[0] === '.') {
    id = id.slice(1)
  }

  if (id.at(-1) === '.') {
    id = id.slice(0, id.length - 1)
  }

  return id
}
const step5 = id => (id === '' ? 'a' : id)
const step6 = id => {
  if (id.length >= 16) {
    id = id.slice(0, 15)

    if (id.at(-1) === '.') {
      id = id.slice(0, id.length - 1)
    }
  }
  return id
}

const step7 = id => {
  id = id.padEnd(3, id[id.length - 1])

  return id
}

const pipe = (functions, args) => {
  functions.forEach(func => {
    args = func(args)
  })

  return args
}

// 50분
