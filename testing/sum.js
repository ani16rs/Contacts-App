function sum(x, y) {
    return x + y
}

// console.assert(sum(1,1) === 2, 'Error summing 1 and 1')     // no error
// console.assert(sum(1,1) === 3, 'Error summing 1 and 1')     // throws error

// if we add other functions, then we have to write more asserts => sloppy code

//basically means export default
module.exports = sum;