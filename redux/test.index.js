
/* eslint-disable no-unused-vars */
/* global jest, expect, describe, it */

const { addUser, addContact, contactFetch } = require('../index')

describe('Actions: addUser, contactFetch', () => {
  it('addUser [Function]: (newUser)', () => {
    expect(addUser('Donald')).toEqual({ type: 'UPDATE_USER', payload: 'Donald' })
  })

  it('addContact [Function]: (newContact)', () => {
    expect(addContact({ name: 'John Doe', phone: '9999888877' })).toMatchSnapshot()
  })

  it('contactFetch [Closure-Function]: () => async(dispatch)', async () => {
    const mockDispatch = jest.fn()
    await contactFetch()(mockDispatch)

    // console.log(mockDispatch.mock.calls[1][0])
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: 'FETCHING_CONTACT', payload: null })
    expect(mockDispatch.mock.calls[1][0]).toMatchSnapshot({ payload: { name: expect.any(String), phone: expect.any(String) } })
  })
})