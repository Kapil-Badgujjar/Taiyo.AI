import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
export default function ChartsAndMaps() {
  const navigate = useNavigate();
  return (

      <div className="flex justify-center items-center" >
          <div className='flex flex-col w-full'>
          <h1 className="text-center font-bold text-4xl p-4">Charts and Maps</h1>
              <div className="flex flex-wrap gap-2 px-2 py-6">
                    {/* Buttons to navigate charts and maps */}
                  <button className='bg-slate-800 text-white w-48 text-xl p-2' onClick={()=>{navigate('dashboard')}}>Dashboard</button>
                  <button className='bg-slate-800 text-white w-48 text-xl p-2' onClick={()=>{navigate('line-chart')}}>Line Chart</button>
                  <button className='bg-slate-800 text-white w-48 text-xl p-2' onClick={()=>{navigate('map')}}>Map</button>
              </div>
              <div className='h-fit'>
                    {/* Outlet to render other components */}
                  <Outlet />
              </div>
              <hr/>
          </div>
      </div>
  )
}
