import React from 'react'
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

  return (
          <>
          <div>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-700 pt-4'>Contacts</h1>
          </div>
            <div className=" sm:flex p-4">
              <Button
                value="Create New Contact"
                action={(): void => {
                  navigate('/add-new-contact');
                }}
              />
            </div>

                {/* Render if list is empty */}
            {contactsList.length === 0 && <div className='flex justify-center items-center py-16 px-4'>
                <h1 className='text-4xl font-bold text-slate-400'>Empty! No contacts, Create now</h1>
              </div>
            }
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2 p-4'>
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
