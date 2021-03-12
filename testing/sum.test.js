const sum = require('./sum.js')

test('sums 1 and 1', () => {
    expect(sum(1, 1)).toBe(2)
})

test('sums 0 and 0', () => {
    expect(sum(0, 0)).toBe(0)
})

test('sums 20 and 30', () => {
    expect(sum(20, 30)).toBe(50)
})

// npm init
// install jest, make your code
// run: npx jest / npm run test / npm test / npm t
// npm t -- --watch for live scoring
// to not run --watch everytime, add to package.json
// npm test -- -u to add change to snapshot