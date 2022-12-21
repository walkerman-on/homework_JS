// Задание 1

const firstArray = [1, 2, 4, 2, 4, 4, 5];
const secondArray = [1, 2, 3, 4, 5];
const thirdArray = [1, -2, -2, 3, 4, -5, -6, -5];

function getUnique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }

  return result
}

function getUnique2(arr) {
  let result = [];
  for (key in arr) {
    if (!result.includes(arr[key])) {
      result.push(arr[key])
    }
  }

  return result
}

function getUnique3(arr) {
  let result = [];
  for (value of arr) {
    if (!result.includes(value)) {
      result.push(value)
    }
  }

  return result
}

const getUnique4 = (arr) => {
  let result = [];
  arr.forEach((param) => {
    if (!result.includes(param)) {
      result = [...result, param]
      // так тоже можно сделать, push добавит элемент param в конец массива
      // разница в том, что push мутирует (изменяет) исходный массив result,
      // а spread-оператор (...) копируют существующий массив
      // result.push(param)
    }
  })
  
  return result
}
console.log('getUnique firstArray', getUnique(firstArray))
console.log('getUnique firstArray', getUnique2(firstArray))
console.log('getUnique firstArray', getUnique3(firstArray))
console.log('getUnique firstArray', getUnique4(firstArray))

console.log('getUnique secondArray', getUnique(secondArray))
console.log('getUnique secondArray', getUnique2(secondArray))
console.log('getUnique secondArray', getUnique3(secondArray))
console.log('getUnique secondArray', getUnique4(secondArray))

console.log('getUnique thirdArray', getUnique(thirdArray))
console.log('getUnique thirdArray', getUnique2(thirdArray))
console.log('getUnique thirdArray', getUnique3(thirdArray))
console.log('getUnique thirdArray', getUnique4(thirdArray))

