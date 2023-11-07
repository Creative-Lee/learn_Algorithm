function solution(record) {
  const idNicknameLog = new Map()
  const inOutLog = []
  const msg = {
    Enter: nickname => `${nickname}님이 들어왔습니다.`,
    Leave: nickname => `${nickname}님이 나갔습니다.`,
  }

  record.forEach(rec => {
    const [command, id, nickName] = rec.split(' ')

    if (command === 'Change') {
      idNicknameLog.set(id, nickName)
      return
    }

    if (command === 'Enter') {
      idNicknameLog.set(id, nickName)
      inOutLog.push(`${id} ${command}`)
      return
    }

    inOutLog.push(`${id} ${command}`)
  })

  return inOutLog.map(log => {
    const [id, command] = log.split(' ')
    const nickName = idNicknameLog.get(id)

    return msg[command](nickName)
  })
}

// id: 닉네임 map
// id: in/out
