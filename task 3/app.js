// 1
const countTrue = (array) => array.filter(key => !!key).length

//console.log(countTrue([false, false, false, false]))

// 2
const jazzify = (array) => array.map(key => !key.endsWith('7') ? key + '7' : key)

//console.log(jazzify(["F7", "E", "A7", "Ab", "Gm", "C7"]))

// 3
const sortDescending = (number) => Number(String(number)
    .split('')
    .sort((a, b) => b - a)
    .join(''))

//console.log(sortDescending(1254859723))

// 4
const sortByLength = (array) => array.sort((a, b) => a.length - b.length)

//console.log(sortByLength(["Google", "Apple", "Microsoft"]))

// 5
const minMax = (array) => [Math.min(...array), Math.max(...array)]

//console.log(minMax([1]))

// 6
const findLargestNums = (array) => array.map(key => Math.max(...key))

//console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]))

// 7
class Calculator {
    add = (a, b) => console.log(a + b)
    subtract = (a, b) => console.log(a - b)
    multiply = (a, b) => console.log(a * b)
    divide = (a, b) => console.log(a / b)
}

// const calculator = new Calculator()
// calculator.add(10, 5)
// calculator.subtract(10, 5)
// calculator.multiply(10, 5)
// calculator.divide(10, 5)

// 8
const keysAndValues = (obj) => [Object.keys(obj).sort(), Object.values(obj).sort()]

//console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))

// 9
const ascDesNone = (array, mode) => {
    // if (mode === 'Asc') return array.sort()
    // if (mode === 'Des') return array.sort((a, b) => b - a)
    // if (mode === 'None') return array

    // or

    switch (mode) {
        case 'Asc': {
            return array.sort()
        }
        case 'Des': {
            return array.sort((a, b) => b - a)
        }
        case 'None': {
            return array
        }
    }
}

// console.log(ascDesNone([4, 3, 2, 1], 'Asc'))

// 10
// const sortNumbers = (array) => array.sort()
const sortNumbers = (array) => {
    let check = true

    while (check) {
        check = false

        for (let i = 1; i < array.length; i++) {
            if(array[i - 1] > array[i]){
                check = true

                const tmp = array[i - 1]
                array[i - 1] = array[i]
                array[i] = tmp
            }
        }
    }

    return array
}

//console.log(sortNumbers([[3], 4, [2], [5], 1, 6]))

// 11
const hasHiddenFee = (array, number) => {
    const getNumber = (str) => parseInt(str.match(/\d+/))

    array = array.map(key => getNumber(key))
    const result = array.reduce((sum, current) => sum + current)

    return result < getNumber(number)
}

//console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"))

// 12
const trace = (array) => {
    let mainSum = 0

    for (let row = 0; row < array.length; row++) {
        mainSum += array[row][row]
    }

    return mainSum
}

// console.log(trace([
//     [1, 0, 1, 0],
//     [0, 2, 0, 2],
//     [3, 0, 3, 0],
//     [0, 4, 0, 4]
// ]))

// 13
const removeSpecialCharacters = (str) => str.replace(/[&\/\\.!@#$%^*(,)]/g, '')

//console.log(removeSpecialCharacters('%fd76$fd(-)6GvKlO.'))

// 14
const mathExpr = (str) => /^\d+ ?[+\-\/*]{1} ?\d+$/g.test(str)

//console.log(mathExpr('4*2'))

// 15
const pentagonal = (n) => (5 * Math.pow(n, 2) - 5 * n + 2) / 2

//console.log(pentagonal(8))

// 16
const tempConversion = (c) => [(c * 9 / 5 + 32), (c + 273.15)]

//console.log(tempConversion(300.4))

// 17
const missingLetter = (str) => {
    // https://www.ssec.wisc.edu/~tomw/java/unicode.html
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }

    return 'No Missing Letter'
}

//console.log(missingLetter('tuvxyz'))
