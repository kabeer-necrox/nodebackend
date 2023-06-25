let path = require('path')


console.log(path.basename(__filename))
console.log(path.basename(__filename, '.js'))

console.log(path.dirname('_/home/kabeer/Desktop/devops claasses/friday/ch3'))

console.log(path.dirname(__filename))

console.log(path.join("/search","kabeer","necrox","/python"))

console.log(path.join("/search","wwww","welcome","to the", "/programming world"))
console.log(path.join("/search","wwww","welcome","to the", "/programming world","..","..","..",".."))


console.log(path.parse(__filename))
console.log(path.parse(__dirname).base)

console.log(path.parse(__filename).name)

















