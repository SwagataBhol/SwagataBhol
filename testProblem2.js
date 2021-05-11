const inventory = require('./inventory')
const result2 = require('./problem2')
const test2= result2(inventory)
console.log(`Last car is a ${test2.car_make} ${test2.car_model}`)
