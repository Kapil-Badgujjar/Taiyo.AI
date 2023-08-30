import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
export default function ChartsAndMaps() {
  const navigate = useNavigate();
  return (

      <div className="flex justify-center items-center" >
          <div className='flex flex-col w-full px-4'>
          <h1 className='text-3xl sm:text-3xl font-bold text-center text-purple-700 pt-4'>Charts and Maps</h1>
              <div className="hidden sm:flex flex-wrap gap-2 px-2 py-6">
                    {/* Buttons to navigate charts and maps */}
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-48 text-xl p-2 rounded-md' onClick={()=>{navigate('full-view')}}>ALL</button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-48 text-xl p-2 rounded-md' onClick={()=>{navigate('dashboard')}}>DASHBOARD</button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-48 text-xl p-2 rounded-md' onClick={()=>{navigate('line-chart')}}>CHART</button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-48 text-xl p-2 rounded-md' onClick={()=>{navigate('map')}}>MAP</button>
              </div>
              <div className="grid grid-cols-4 sm:hidden gap-2 px-2 py-6 grow">
                    {/* Buttons to navigate charts and maps */}
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md' onClick={()=>{navigate('full-view')}}>ALL</button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md' onClick={()=>{navigate('dashboard')}}>DB</button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md' onClick={()=>{navigate('line-chart')}}>CH</button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md' onClick={()=>{navigate('map')}}>MAP</button>
              </div>
              <div className='h-fit h-[820px] overflow-y-scroll'>
                    {/* Outlet to render other components */}
                  <Outlet />
              </div>
              <hr/>
          </div>
      </div>
  )
}
