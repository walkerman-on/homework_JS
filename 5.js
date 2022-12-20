// Задание 5

const createVisitor = (name, age, number) => {
  return { name, age, number }
}

// https://doka.guide/js/function-arguments-object/
// function createVisitor() {
//   console.log('arguments', arguments)
//   return { name: arguments[0], age: arguments[1], number: arguments[2] }
// }

// const createVisitor = (...params) => {
//   console.log('params', params)
//   return { name: params[0], age: params[1], number: params[2] }
// }

console.log('createVisitor', createVisitor('Иван Иванович', 24, '89005553535'))