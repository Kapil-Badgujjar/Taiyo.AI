import React, { useEffect } from 'react'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import { selectAllContact } from '../../features/contact/contactSlice'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
type contact = {
  id: string,
  firstName: string,
  lastName: string,
  isActive: boolean
}
export default function Contacts() {
  const navigate = useNavigate();
  const contactsList: contact[] = useSelector(selectAllContact); //select all contacts

  useEffect(() => {
    console.log(contactsList);
  },[]);


  return (
          <>
            <div className="flex">
              <Button
                value="Create New Contact"
                action={(): void => {
                  navigate('/add-new-contact');
                }}
              />
            </div>

                {/* Render if list is empty */}
            {contactsList.length === 0 && <div className='flex justify-center items-center py-16'>
                <h1 className='text-4xl font-bold text-slate-400'>Empty! No contacts, Create now</h1>
              </div>
            }
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
              {/* map all contacts and render them */}
              {contactsList.map((contactItem) => {
                    return (
                        <div key={contactItem.id}>
                            <Contact item = {contactItem} />
                        </div>
                    );
                })}
            </div>
          </>
  )
}
