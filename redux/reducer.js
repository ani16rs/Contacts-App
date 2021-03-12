import {combineReducers} from 'redux'
import contacts from '../contacts'
import {UPDATE_USER ,UPDATE_CONTACTS, LOG_IN_FULFULLED, LOG_IN_REJECTED, DELETE_CONTACTS, CHANGE_FIRST_CONTACT} from './actions'

// state = state.user
userReducer = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case UPDATE_USER:           return ({...state, ...action.payload})
        case UPDATE_CONTACTS:       return ({ ...state, latestContact: action.payload })
        case LOG_IN_FULFULLED:      return ({ ...state, token: action.payload })
        case LOG_IN_REJECTED:       return ({ ...state, loginErr: action.payload})
        default:                    return state
    }
}

// state = state.contacts
contactsReducer = (state = contacts, action) => {
    if (action.type === UPDATE_CONTACTS)        return [ ...state, action.payload ]
    if (action.type === CHANGE_FIRST_CONTACT) {
        const [firstContact, ...rest] = state
        if (!firstContact)      return state

        const newContact = { ...firstContact, name: 'Boshi Boshi' }
        return [ newContact, ...rest ]
    }
    // if (action.type === DELETE_CONTACTS)        return [ ...state, action.payload = null ]

    return state
}

const reducer = combineReducers({
    user: userReducer,
    contacts: contactsReducer,
})

export default reducer