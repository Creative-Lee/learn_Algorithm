function solution(cacheSize, cities) {
  if (!cacheSize) {
    return cities.length * 5
  }
  cities = cities.map((e) => e.toLowerCase())

  let cache = new Array(cacheSize)
  let time = 0

  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      cache.splice(cache.indexOf(cities[i]), 1)
      cache.push(cities[i])
      time += 1
    } else {
      if (cache.length === cacheSize) {
        cache.shift()
      }
      cache.push(cities[i])
      time += 5
    }
  }
  return time
}
