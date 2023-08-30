import React, { useState } from 'react'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addContact } from '../../features/contact/contactSlice';
import { useNavigate } from 'react-router-dom';
export default function NewContactForm() {


    const navigate = useNavigate(); // obtaning navigate function from useNavigate
    const dispatch = useDispatch();  // obtaning dispatch function from useDispatch

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(true);


    // function to verify data and dipatch addContact
    function addNewContact(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault();     // for preventing default form submission

        // if conditon to check if values are empty
        if(!firstName.trim() || !lastName.trim()) {
            alert("Please enter a proper data");
            return;
        }

        // Dispatch the addContact function with payload to add new contact
        dispatch(addContact({firstName, lastName, isActive}));

        // navigate to root and show contacts
        navigate('/');
    }

  return (
    <div className="flex flex-col justify-start items-center text-xl gap-4 sm:gap-16 h-full">
        <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-700 pt-4'>Create New Contact</h1>
        <form className='flex flex-col gap-4 border-2 border-slate-100 p-4 sm:p-8 bg-white drop-shadow-lg'>
            <div className='grid grid-cols-2'>
                <label className="font-bold" htmlFor='firstName'>First Name: </label>
                <input className='border-2 border-purple-700 py-1 px-2 rounded-lg' type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
            </div>
            <div className='grid grid-cols-2'>
                <label className="font-bold" htmlFor='lastName'>Last Name: </label>
                <input className='border-2 border-purple-700 py-1 px-2 rounded-lg' type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
            </div>
            <div className='grid grid-cols-2'>
                <p className="font-bold">Status: </p>
                <div>
                    <div>
                        <input type="radio" name="status" id="active" checked={isActive} onChange={()=>{setIsActive(true)}}/> <label htmlFor="active" className='cursor-pointer'> Active</label>
                    </div>
                    <div>
                        <input type='radio' name="status" id="inactive" checked={!isActive} onChange={()=>{setIsActive(false)}}/> <label htmlFor="inactive" className='cursor-pointer'> Inactive</label>
                    </div>
                </div>
            </div>
            <Button value="Save Contact" action={(e: React.FormEvent<HTMLInputElement>): void => {addNewContact(e)}} />
        </form>
    </div>
  )
}
