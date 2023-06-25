// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hi!')
// })

// app.listen(3000, () => console.log('Server ready'))



// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hi!')
// })



// const server = app.listen(3000, () => console.log('Server ready'))

// process.on('SIGTERM', () => {
//   server.close(() => {
//     console.log('Process terminated')
//   })
// })




// const x = 'x'
// const y = 'y'
// console.log(x, y)
// let kk = " i am kabeer necrox"
// console.log(kk)



// console.log('My %s has %d years', 'cat', 2)



// console.log('%O', Number)


// const x = 1
// const y = 2
// const z = 3

// console.count(
//   'The value of x is ' + x + ' and has been checked .. how many times?'
// )

// console.count(
//   'The value of x is ' + x + ' and has been checked .. how many times?'
// )

// console.count(
//   'The value of y is ' + y + ' and has been checked .. how many times?'
// )



// const oranges = ['orange', 'orange']
// const apples = ['just one apple']

// oranges.forEach(fruit => {
//   console.count(fruit)
// })

// apples.forEach(fruit => {
//   console.count(fruit)
// })





// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()


// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
  // do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }

// measureDoingSomething()


// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)














// [1, 2, 3].forEach(num => {...   console.log(num)
//     ... })














// const chalk = require('chalk')
// console.log(chalk.yellow('hi!'))









// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`What's your name?`, (name) => {
//   console.log(`Hi ${name}!`)
//   readline.close()
// })


const inquirer = require('inquirer')

var questions = [{
  type: 'input',
  name: 'name',
  message: "What's your name?",
}]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})



