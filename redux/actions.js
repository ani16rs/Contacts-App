import {login} from '../Api'

// ACTION TYPES
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_CONTACTS = "UPDATE_CONTACTS"
export const DELETE_CONTACTS = "UPDATE_CONTACTS"
export const LOG_IN_SENT = "LOG_IN_SENT"
export const LOG_IN_FULFULLED = "LOG_IN_FULFILLED"
export const LOG_IN_REJECTED = "LOG_IN_REJECTED"
export const CHANGE_FIRST_CONTACT = "CHANGE_FIRST_CONTACT"

// ACTION CREATORS
export const addUser = (newUser) => ({ type: UPDATE_USER, payload: newUser })
export const addContact = (newContact) => ({ type: UPDATE_CONTACTS, payload: newContact })
export const changeFirstContact = () => ({ type: CHANGE_FIRST_CONTACT })

// returns a function that takes a dispatch then uses that dispatch
// export const logInUser = (username, password) => async dispatch => {
//     dispatch({type: LOG_IN_SENT})
//     try {
//         const token = await login(username, password)
//         dispatch({type: LOG_IN_FULFULLED, payload: token})
//     }
//     catch (err){ dispatch({type: LOG_IN_REJECTED, payload: err.message}) }
// }

// new one with loginFn as a default arg
export const logInUser = (username, password, loginFn = login) => async dispatch => {
    // const realLoginFn = loginFn ? loginFn : logIn
    const realLoginFn = loginFn || logIn                // shorthand
    dispatch({type: LOG_IN_SENT})

    try {
        const token = await realLoginFn(username, password)
        dispatch({type: LOG_IN_FULFULLED, payload: token})
    }
    catch (err){ dispatch({type: LOG_IN_REJECTED, payload: err.message}) }
}