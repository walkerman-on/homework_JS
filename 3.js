// Задание 3

const testData = [1, 2, 3, 1, 5, 6];

const getOddNums = (arr) => 
  arr.reduce((sum, item) => {
    if (item % 2 === 1) {
      ++sum
    }
    return sum
  }, 0)

  console.log('getOddNums', getOddNums(testData))
