import React from 'react'
export default function Button( props: {value: string, action: Function}) {
  let width = window.innerWidth;
  return (
    <div >
        <button onClick={(e)=>{props.action(e)}} className='bg-sky-600 hover:bg-sky-500 active:bg-sky-400 px-4 py-2 text-xl my-2 w-full sm:w-full text-white drop-shadow-lg'>{props.value}</button>
    </div>
  )
}
