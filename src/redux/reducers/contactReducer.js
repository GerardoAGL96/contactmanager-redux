import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT } from './../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    
    switch (action.type) {
        case GET_CONTACTS:
            return [
                ...action.payload
            ];            
        case ADD_CONTACT:
            return [
                ...state,
                action.payload
            ];
        case UPDATE_CONTACT:
            return state.map(contact => {
                return (contact.id === action.payload.id) ? (action.payload) : (contact)
            });
        case DELETE_CONTACT: 
            return state.filter(contact => contact.id !== action.payload.id);
        default:
            return state;
    }    
}