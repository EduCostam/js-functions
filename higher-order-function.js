/*
* Functions that operate on other functions,
* either by them as arguments or by
*returning them, are called highe-order funcitons.
*/ 

function run(fn) {
    return fn()
}

function sayHello() {
    console.log('Hello!!')
    return
}

run(sayHello())

run (function() {
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)