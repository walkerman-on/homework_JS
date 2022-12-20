// Задание 7

// if X[i] > X[j] then X[i] = X[i] - X[j]

const testData = [6, 9, 21]

// тут сложность O(N)
const compare = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      j = i + 1;
    } else {
      j = 0;
    }

    if (arr[i] > arr[j]) {
      arr[i] = arr[i] - arr[j]
    }
  }
  return arr
}

// тут сложность O(N^2)
// const compare = (arr) => {
//   for (let i in arr) {
//     for (let j in arr) {
//       if (arr[i] > arr[j]) {
//         arr[i] = arr[i] - arr[j]
//       }
//     }
//   }
//   return arr
// }

const isAllEqual = (arr) => arr.every(item => item === arr[0])

const getMinSum = (arr) => {
  let compareRes = compare(arr)
  while (!isAllEqual(compareRes)) {
    compareRes = compare(arr)
  }
  console.log(compareRes)
  return compareRes.reduce((sum, item) => sum += item, 0)
}

console.log('getMinSum', getMinSum(testData))