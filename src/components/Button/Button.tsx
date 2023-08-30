import React from 'react'
export default function Button( props: {value: string, action: Function}) {
  return (
    <div >
        <button onClick={(e)=>{props.action(e)}} className='bg-purple-600 hover:bg-purple-500 active:bg-slate-600 px-4 py-2 text-xl my-2 w-full sm:w-full text-white drop-shadow-lg rounded-lg'>{props.value}</button>
    </div>
  )
}
