// Задание 3

const testData = [1, 2, 3, 1, 5, 6];

const odds = (arr) => {
  const filteredArray = arr.filter((item) => {
    if (item % 2 === 1) {
      return item
    }
  }) 
  return filteredArray.length
}

const getOddNums = (arr) => {
  return arr.reduce((sum, item) => {
    if (item % 2 === 1) {
      ++sum
    }
    return sum
  }, 0)
}

// const getOddNums = (arr) =>
//   arr.reduce((sum, item) => {
//     if (item % 2 === 1) {
//       ++sum
//     }
//     return sum
//   }, 0)

console.log('getOddNums', getOddNums(testData))
console.log('odds', odds(testData))
