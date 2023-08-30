import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import allImage from './all.png'
import dashboardImage from './dashboard.png'
import chartImage from './charts.png'
import mapImage from './map.png'
export default function ChartsAndMaps() {
  const navigate = useNavigate();
  return (

      <div className="flex justify-center items-center" >
          <div className='flex flex-col w-full px-4'>
          <h1 className='text-3xl sm:text-3xl font-bold text-center text-purple-700 pt-4'>Charts and Maps</h1>
              <div className="hidden sm:flex flex-wrap gap-2 px-2 py-6">
                    {/* Buttons to navigate charts and maps */}
                  <button className='flex items-center outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-56 text-xl p-2 rounded-md' onClick={()=>{navigate('full-view')}}><img className='w-12 mr-4' src={allImage} alt="All"/>ALL</button>
                  <button className='flex items-center outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-56 text-xl p-2 rounded-md' onClick={()=>{navigate('dashboard')}}><img className='w-12 mr-4' src={dashboardImage} alt="Dashboard"/>DASHBOARD</button>
                  <button className='flex items-center outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-56 text-xl p-2 rounded-md' onClick={()=>{navigate('line-chart')}}><img className='w-12 mr-4' src={chartImage} alt="Chart"/>CHART</button>
                  <button className='flex items-center outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md w-56 text-xl p-2 rounded-md' onClick={()=>{navigate('map')}}><img className='w-12 mr-4' src={mapImage} alt="Map"/>MAP</button>
              </div>
              <div className="grid grid-cols-4 sm:hidden gap-2 px-2 py-6 grow">
                    {/* Buttons to navigate charts and maps */}
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md m-auto' onClick={()=>{navigate('full-view')}}><img className='w-12' src={allImage} alt="All"/></button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md m-auto' onClick={()=>{navigate('dashboard')}}><img className='w-12' src={dashboardImage} alt="Dashboard"/></button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md m-auto' onClick={()=>{navigate('line-chart')}}><img className='w-12' src={chartImage} alt="Chart"/></button>
                  <button className='outline outline-1 outline-slate-200 text-purple-600 drop-shadow-md text-xl p-2 rounded-md m-auto' onClick={()=>{navigate('map')}}><img className='w-12' src={mapImage} alt="Map"/></button>
              </div>
              <div className='min-h-full'>
                    {/* Outlet to render other components */}
                  <Outlet />
              </div>
              <hr/>
          </div>
      </div>
  )
}
