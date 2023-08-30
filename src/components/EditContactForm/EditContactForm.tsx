import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { editContact, selectAllContact } from '../../features/contact/contactSlice';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditContactForm() {

    const {id} = useParams();  // getting id parameter from the url using useParams
    const contacts = useSelector(selectAllContact); // selecting all contacts
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState<string>(''); //states to store input values
    const [lastName, setLastName] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);

    // function to check values and dispatch editContact
    function editContactFunction(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault();
        if(!firstName.trim() || !lastName.trim()){
            alert('Please enter proper values');
            return;
        }
        dispatch(editContact({id: id, firstName: firstName, lastName: lastName, isActive: isActive}));
        navigate('/');
    }

    // for retriving data for editing
    useEffect(() => {
        const contact = contacts.filter(item => item.id === id &&  item );
        setFirstName(contact[0].firstName);
        setLastName(contact[0].lastName);
        setIsActive(contact[0].isActive);
    },[contacts,id]);

  return (
    <div className="flex flex-col justify-start items-center text-xl gap-4 sm:gap-16 h-full">
        <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-700 pt-4'>Edit Contact</h1>
        <form className='flex flex-col gap-4 border-2 border-slate-100  p-4 sm:p-8 bg-white drop-shadow-lg'>
            <div className='grid grid-cols-2'>
                <label className="font-bold" htmlFor='firstName'>First Name: </label>
                <input className='border-2 border-purple-700 p-1 rounded-lg' type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
            </div>
            <div className='grid grid-cols-2'>
                <label className="font-bold" htmlFor='lastName'>Last Name: </label>
                <input className='border-2 border-purple-700 p-1 rounded-lg' type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
            </div>
            <div className='grid grid-cols-2'>
                <p className="font-bold">Status: </p>
                <div>
                    <div>
                        <input type="radio" name="status" id="active" checked={isActive} onChange={()=>{setIsActive(true)}} /> <label htmlFor="active" className='cursor-pointer'> Active</label>
                    </div>
                    <div>
                        <input type='radio' name="status" id="inactive" checked={!isActive} onChange={()=>{setIsActive(false)}} /> <label htmlFor="inactive" className='cursor-pointer'> Inactive</label>
                    </div>
                </div>
            </div>

            {/* Button componet accept two arguments value for button name and action to perform */}
            <Button value="Update" action={(e: React.FormEvent<HTMLInputElement>): void => {editContactFunction(e)}} />
        </form>
    </div>
  )
}
