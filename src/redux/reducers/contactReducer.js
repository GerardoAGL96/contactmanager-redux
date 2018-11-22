import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT } from './../actions/types';

const initialState = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
    },
    {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
    },
    {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
    }
];

export default function (state = initialState, action) {
    
    switch (action.type) {
        case GET_CONTACTS:
            return [
                ...state
            ];
        case ADD_CONTACT:
            return [
                ...state,
                action.payload
            ];
        case UPDATE_CONTACT:
            return state.map(contact => {
                return (contact.id == action.payload.id) ? (action.payload) : (contact)
            });
        case DELETE_CONTACT: 
            return state.filter(contact => contact.id != action.payload.id);
        default:
            return state;
    }    
}