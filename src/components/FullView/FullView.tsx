import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import LineChart from '../LineChart/LineChart'
import LeafletMap from '../LeafletMap/LeafletMap'

export default function FullView() {
  return (
    <div className="flex flex-col gap-16" >
        <div>
            <Dashboard />
        </div>
        <div className='h-fit'>
            <div className='grid lg:grid-cols-2 gap-8 h-96'>
                <LineChart />
                <LeafletMap />
            </div>
        </div>
    </div>
  )
}
