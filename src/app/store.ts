import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../features/contact/contactSlice'

// reduxt store
const store = configureStore({
    
    // reducers
    reducer: {
        contact: contactReducer,
    }
})

//exporting root state type 
export type RootState = ReturnType<typeof store.getState>;

export default store;  //exporting store