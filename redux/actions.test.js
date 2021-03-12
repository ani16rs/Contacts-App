// const actions = require('./actions.js')
import * as actions from './actions.js'

// individual test
// test('updateUser returns the correct action', () => {
//     expect(actions.addUser({name: 'test name'})).toMatchSnapshot({ type: actions.UPDATE_USER, payload: {name: 'test name'}, })
// })

// multiple tests of same type
describe('updateUser returns action: ', () => {
    it('updateUser returns the correct action', () => {
        expect(actions.addUser({name: 'test name'})).toMatchSnapshot({ type: actions.UPDATE_USER, payload: {name: 'test name'}, })
    })

    it('handles empty object', () => {
        expect(actions.addUser({})).toMatchSnapshot()
    })

    it('handles empty name', () => {
        expect(actions.addUser({name: ''})).toMatchSnapshot()
    })
})

describe('loginUser returns actions', () => {
    const errMessage = 'shitFuckIncorrectCreds'
    const fakeToken = 'thisIsATestToken'
    const mockLogin = (username, password) => {
        if (username === 'u' && password === 'p')   return fakeToken
        throw new Error(errMessage)
    }

    it('dispatches LOG_IN_SENT', async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('', '')(mockDispatch)
        // console.log(mockDispatch.mock.calls)
        // mockDispatch.mock.calls all the args that the mock fn was invoked on
        expect(mockDispatch.mock.calls[0][0]).toEqual({type: actions.LOG_IN_SENT, })
    })

    it('dispatches LOG_IN_FULFILLED with correct creds', async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('u', 'p', mockLogin)(mockDispatch)
        expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.LOG_IN_FULFULLED, payload: fakeToken})
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
        // console.log(mockDispatch.mock.calls)
    })

    it('dispatches LOG_IN_REJECTED with incorrect creds', async () => {
        const mockDispatch = jest.fn()
        await actions.logInUser('', '', mockLogin)(mockDispatch)
        // console.log(mockDispatch.mock.calls)
        expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.LOG_IN_REJECTED, payload: errMessage})
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
    // expect(mockDispatch.mock.calls[1][0]).toMatchSnapshot({ payload: { name: expect.any(String), phone: expect.any(String) } })

    })
})