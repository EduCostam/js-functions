
function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// spread/rest
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5, 6])

function sumALL(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumALL(1, 2, 3, 4, 5))
