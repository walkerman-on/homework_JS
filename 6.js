// Задание 6

const testData = [1, 2, 3, 4, 5];

const deleteMin = (arr) => {
  let min = arr[0]
  arr.forEach(item => {
    if (item < min) {
      min = item
    }
  })
  return arr.filter(item => item !== min)
}

// const deleteMin = (arr) => {
//   const min = Math.min(...arr)
//   return arr.filter(item => item !== min)
// }

console.log('deleteMin', deleteMin(testData))