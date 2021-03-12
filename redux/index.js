/* eslint-disable no-unused-vars */

/**
 *  store4 - redux with async actions
 *  Why you do this Jordan
**/

const fetch = require('node-fetch')

const DEFAULT_STATE = { users: {}, contacts: [] }

// Store Implementation
class Store {
  constructor (reducer, state) {
    this.reducer = reducer
    this.state = state
  }

  dispatch (action) {
    if (typeof action === 'function') {
      action(this.dispatch.bind(this))
    } else {
      this.state = this.reducer(this.state, action)
    }
  }

  getState () {
    return this.state
  }
}

// Reducers
const merge = (prev, next) => Object.assign({}, prev, next)
const userReducer = (users, action) => {
  if (action.type === UPDATE_USER) { return merge(users, action.payload) }
  return users
}
const contactReducer = (contacts, action) => {
  switch (action.type) {
    case UPDATE_CONTACT:
      return [...contacts, action.payload]

    case FETCHED_CONTACT:
      return [...contacts, action.payload]

    default:
      return contacts
  }
}

const reducer = (state, action) => ({
  users: userReducer(state.users, action),
  contacts: contactReducer(state.contacts, action)
})

// Actions
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const FETCHING_CONTACT = 'FETCHING_CONTACT'
const FETCHED_CONTACT = 'FETCHED_CONTACT'

const addUser = user => ({
  type: UPDATE_USER,
  payload: user
})

const addContact = contact => ({
  type: UPDATE_CONTACT,
  payload: contact
})

const contactFetch = () => async dispatch => {
  dispatch({ type: FETCHING_CONTACT, payload: null })
  const response = await fetch('https://randomuser.me/api/?results=1&nat=us')
  const { results } = await response.json()
  const payload = { name: `${results[0].name.first} ${results[0].name.last}`, phone: results[0].phone }
  dispatch({ type: FETCHED_CONTACT, payload: payload })
}

const store = new Store(reducer, DEFAULT_STATE)

// store.dispatch(addUser({foo: 'foo'}))
// store.dispatch(addUser({foo: 'baz'}))
// store.dispatch(addContact({name: 'Siddharth', phone: '7009924902'}))
// store.dispatch(addContact({name: 'Sunny', phone: '000000000'}))

store.dispatch(contactFetch())

setTimeout(() => console.log(store.getState()), 2000)

module.exports = { contactFetch, addUser, addContact }
