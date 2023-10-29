function solution(cacheSize, cities) {
  let totalTime = 0

  cities.reduce((cache, city) => {
    const upperCity = city.toUpperCase()

    if (cacheSize === 0) {
      totalTime += 5
      return cache
    }

    if (cache.includes(upperCity)) {
      totalTime += 1
      cache.splice(cache.indexOf(upperCity), 1)
      cache.push(upperCity)
      return cache
    }

    if (cache.length === cacheSize) {
      totalTime += 5
      cache.shift()
      cache.push(upperCity)
      return cache
    }

    totalTime += 5
    cache.push(upperCity)
    return cache
  }, [])

  return totalTime
}

// 1. 캐시 배열
//      1. 캐시 배열은 LRU 가장 오래 참조되지 않은 것 부터 제거함
//      2. 즉 참조되면? 다시 최신으로 올려줘야함.
//      3. 캐시배열에 도시가 있으면(히트) 캐시 배열 내 해당 도시 splice? + push
//      4. 캐시배열에 없으면, 캐시 배열 shift + 해당 도시 배열에 푸쉬
