// Задание 2

// ТОЧНО поместится
const limesToCut = (length, words) => {
  let result = 0
  words.reduce((sum, item) => {
    if (sum + item.length <= length) {
      sum += item.length + 1
      ++result
    }
    return sum
  }, 0)
  return result
}

// МАКСИМАЛЬНО поместится
// const limesToCut = (length, words) => {
//   let result = 0
//   const arr = words.sort((prev, next) => prev.length - next.length)
//   arr.reduce((sum, item) => {
//     if (sum + item.length <= length) {
//       sum += item.length + 1
//       ++result
//     }
//     return sum
//   }, 0)
//   return result
// }

console.log('limesToCut 1', limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
console.log('limesToCut 2', limesToCut(25, ['small', 'large', 'tiny', 'me', 'i', 'i', 'i', 'me']));
console.log('limesToCut 3', limesToCut(25, ['small', 'large', 'tiny', 'me', 'me', 'i', 'i', 'i']));
