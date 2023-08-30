import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../features/contact/contactSlice';
import { useNavigate } from 'react-router-dom';

// itemType for type matching
type itemType = {
  id: string,
  firstName: string,
  lastName: string,
  isActive: boolean
}

// interface for props
interface contactInterface {
  item: itemType,
}

export default function Contact(props: contactInterface) {

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="outline outline-1 outline-purple-300 p-8 drop-shadow rounded-md">
        <div className='py-2'>
            <div><span>Name: </span><span>{props.item.firstName + " " + props.item.lastName}</span></div>
            <div>Status: {props.item.isActive ? "Active":"Inactive"}</div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
            <button onClick={()=>{navigate(`/edit-contact/${props.item.id}`)}} className="bg-green-600 text-white py-1 rounded-sm">EDIT</button>
            <button onClick={()=>{dispatch(deleteContact({id: props.item.id}))}} className="bg-red-600 text-white py-1 rounded-sm">DELETE</button>
        </div>
    </div>
  )
}
