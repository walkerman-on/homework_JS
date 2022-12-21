const arr = [1, 2, 3, 4, 5, 6, 1, -3, -5, -1, 0]
// console.log(arr)

// map - новый массив такой же длины как старый
const newArr = arr.map((item) => {
  return 2 * item
  // return item - 1
  // return { newValue: item }
  // return `${item}`
})
// console.log(newArr)

// filter - новый массив произвольной длины, не большей чем первоначальная
const filteredArray = arr.filter((item) => {
  if (item % 2 === 0) {
    return item
  }
})
// console.log(filteredArray)

// some - boolean
const hasSomeOdd = arr.some((item) => {
  if (item % 2 === 0) {
    return item
  }
})
// console.log(hasSomeOdd)

// every - boolean
const everyIsOdd = arr.every((item) => {
  if (item % 2 === 0) {
    return item
  }
})
// console.log(everyIsOdd)

// find - первое вхождение в массив, удовлетворяющее условию
const first = (array) => {
  let result = 0;
  let index
  array.forEach((item, i) => {
    if (item % 2 === 0 && result === 0) {
      result = item
      index = i
    }
  })
  return [result, index]
}

const firstValue = arr.find(item => {
  if (item % 2 === 0) {
    return item
  }
})
// console.log(first(arr))
// console.log(firstValue)

const sum = (array) => {
  let summa = 0;
  array.forEach(item => {
    summa = summa + item
  })
  return summa
}
// console.log(sum(arr))

const summa = arr.reduce((accumulator, item) => {
  accumulator = accumulator + item
  return accumulator
}, 0)
// console.log(summa)

const double = arr.reduce(
  (accumulator, item) => {
    accumulator = accumulator + 2 * item
    return accumulator
  },
  0
)
// console.log(double)









// Задание 2

// поместится без изменения порядка в массиве
const limesToCut = (length, words) => {
  let result = 0
  words.reduce((sum, item) => {
    sum += item.length
    // можно между словами ставить пробелы, то ест тут считать +1, где 1 - это пробел после слова
    if (sum <= length) {
      ++result
    }
    return sum
  }, 0)
  return result
}

// МАКСИМАЛЬНО поместится
// const limesToCut = (length, words) => {
//   let result = 0
//   // сортировка массива от меньшего к большему
//   const arr = words.sort((prev, next) => prev.length - next.length)

//   arr.reduce((sum, item) => {
//     sum += item.length
//     if (sum <= length) {
//       ++result
//     }
//     return sum
//   }, 0)
//   return result
// }

// МИНИМАЛЬНО поместится
// const limesToCut = (length, words) => {
//   let result = 0
//   // сортировка массива от большего к меньшему
// const arr = words.sort((prev, next) => next.length - prev.length)

//   arr.reduce((sum, item) => {
//     sum += item.length
//     if (sum <= length) {
//       ++result
//     }
//     return sum
//   }, 0)
//   return result
// }

console.log('limesToCut 1', limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
console.log('limesToCut 2', limesToCut(25, ['small', 'large', 'small', 'small', 'me', 'i', 'i', 'i', 'me']));
console.log('limesToCut 3', limesToCut(25, ['small', 'large', 'small', 'small', 'me', 'me', 'i', 'i', 'i']));
