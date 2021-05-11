const inventory = require('./inventory')
const result1 = require('./problem1')
const test1=result1(inventory,33)
console.log(`Car 33 is a ${test1.car_year} ${test1.car_make} ${test1.car_model}`)
