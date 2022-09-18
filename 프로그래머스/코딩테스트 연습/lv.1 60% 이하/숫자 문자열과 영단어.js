function solution(s) {
  let str = s
  let length = str.length
  let result = ''
  while (str.length) {
    let char = str[0].charCodeAt()
    if (97 <= char && char <= 122) {
      if (str[0] === 'z') {
        str = str.substring(4)
        result = result + '0'
      } else if (str[0] === 'o') {
        str = str.substring(3)
        result = result + '1'
      } else if (str[0] === 't') {
        if (str[1] === 'w') {
          str = str.substring(3)
          result = result + '2'
        } else {
          str = str.substring(5)
          result = result + '3'
        }
      } else if (str[0] === 'f') {
        if (str[1] === 'o') {
          result = result + '4'
        } else {
          result = result + '5'
        }
        str = str.substring(4)
      } else if (str[0] === 's') {
        if (str[1] === 'i') {
          str = str.substring(3)
          result = result + '6'
        } else {
          str = str.substring(5)
          result = result + '7'
        }
      } else if (str[0] === 'e') {
        str = str.substring(5)
        result = result + '8'
      } else if (str[0] === 'n') {
        str = str.substring(4)
        result = result + '9'
      }
    } else {
      result = result + str[0]
      str = str.substring(1)
    }
  }

  return +result
}
