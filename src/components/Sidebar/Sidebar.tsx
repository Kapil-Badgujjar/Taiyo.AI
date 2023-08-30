import React from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='w-full sm:w-1/3 lg:w-1/4 h-fit sm:h-[990px] bg-slate-300 p-4'>
        {/* Button to navigate between Contacts and Charts */}
        <Button value="Contacts" action={(): void =>{navigate('/');}}/>
        <Button value="Charts and maps" action={(): void =>{navigate('/charts/full-view')}} />
    </div>
  )
}
