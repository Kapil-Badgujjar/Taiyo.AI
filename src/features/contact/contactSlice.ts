import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';        //uuid to generate unique identifier

// contact type
type contact = {
    id: string,
    firstName: string,
    lastName: string,
    isActive: boolean
}

// initial state interface
interface initialStateInterface {
    contacts: contact[],
}

// initial state
const initialState: initialStateInterface  = {
    contacts: []
}

// contact Slice
const contactSlice = createSlice({
    name: 'contact',        // slice name
    initialState: initialState,     //initial state

    // reducers for changing state
    reducers: {

        // add contact reducer
        addContact: (state,action): void => {
            const id: string = uuidv4().toString();
            console.log(action.payload);
            state.contacts.push({...action.payload, id: id});
        },

        //editContact reducer
        editContact: (state,action): void => {
            state.contacts = state.contacts.map((item)=>{
                if(item.id !== action.payload.id) return item;
                else return action.payload;
            })
        },

        // delete contact reducer
        deleteContact: (state,action): void => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload.id);
        }
    }
})


export const selectAllContact = (state: RootState) => state.contact.contacts; //exporting selectAllContact   //* using root state here exported from store

export const { addContact, editContact, deleteContact } =  contactSlice.actions;  //exporting actions 

export default contactSlice.reducer;  //export default contact reducer