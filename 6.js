// Задание 6

const testData = [1, 2, 3, 4, 5];

const deleteMinValue = (arr) => {
  let min = arr[0]
  arr.forEach(item => {
    if (min > item) {
      min = item
    }
  })
  const newArr = arr.filter(item => {
    if (min !== item) {
      return item
    }
  })
  return newArr
}

console.log(deleteMinValue(testData))


const deleteMin = (arr) => {
  const min = Math.min(...arr)
  return arr.filter(item => item !== min)
}

// console.log('deleteMin', deleteMin(testData))