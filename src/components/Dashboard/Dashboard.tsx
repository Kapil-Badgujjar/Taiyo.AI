import React from 'react'
import axios from 'axios'   // axios from axios package
import {  useQuery } from '@tanstack/react-query';

export default function Dashboard() {

    // using react query to make intelligent data fetching 
    // it enables automatic retrying
    const myQuery = useQuery({
        queryKey: ['repoData'],
        queryFn: () => axios.get('https://disease.sh/v3/covid-19/all').then(response => response.data) //making axios call
      });
      
      if(myQuery.isLoading) return <h1>Loading...</h1>      // When data is loading from the server
      if(myQuery.error) return <h1>Error</h1>       // render if any error occurred

      return (
        <div>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-700 py-4'>Full Statistics</h1>
            <div>
                <hr/>
                {/* Mapping over data and rendering the values*/}
                {myQuery.data && (
                    <div className='flex flex-wrap gap-4 text-white p-2'> {/* applying tailwind class for styling */}
                        <div className="bg-yellow-600 p-4 border-2 border-slate-100 grow">
                            <p className='text-3xl font-bold'> <span className=''>Total Cases: </span><span className='' >{myQuery.data.cases}</span></p>
                            <hr/>
                            <p className='text-xl'> <span className=''>Cases Per One Million:- </span><span className='' >{myQuery.data.casesPerOneMillion}</span></p>
                            <p className='text-xl'> <span className=''>Today Cases: </span><span className='' >{myQuery.data.todayCases}</span></p>
                            <p className='text-xl'> <span className=''>One Case per People:- </span><span className='' >{myQuery.data.oneCasePerPeople}</span></p>
                        </div>
                        <div className='bg-red-600 p-4 border-2 border-slate-100 grow'>
                            <p className='text-3xl font-bold'> <span className='font-bold'>Total Deaths: </span><span className='' >{myQuery.data.deaths}</span></p>
                            <hr/>
                            <p className='text-xl'> <span className=''>One Death per People: </span><span className='' >{myQuery.data.oneDeathPerPeople}</span></p>
                            <p className='text-xl'> <span className=''>Today Deaths: </span><span className='' >{myQuery.data.todayDeaths}</span></p>
                            <p className='text-xl'> <span className=''>Deaths Per One Million: </span><span className='' >{myQuery.data.deathsPerOneMillion}</span></p>
                        </div>
                        <div className='bg-green-600 p-4 border-2 border-slate-100 grow'>
                            <p className='text-3xl font-bold'> <span className='font-bold'>Total Recovered: </span><span className='' >{myQuery.data.recovered}</span></p>
                            <hr/>
                            <p className='text-xl'> <span className=''>Today Recovered: </span><span className='' >{myQuery.data.todayRecovered}</span></p>
                            <p className='text-xl'> <span className=''>Recovered Per One Million: </span><span className='' >{myQuery.data.recoveredPerOneMillion}</span></p>

                        </div>
                        <div className='bg-blue-600 p-4 border-2 border-slate-100 grow'>
                            <p className='text-3xl font-bold'> <span className='font-bold'>Tests: </span><span className='' >{myQuery.data.tests}</span></p>
                            <hr/>
                            <p className='text-xl'> <span className=''>Tests Per One Million: </span><span className='' >{myQuery.data.testsPerOneMillion}</span></p>
                            <p className='text-xl'> <span className=''>One Test per People: </span><span className='' >{myQuery.data.oneTestPerPeople}</span></p>
                        </div>
                        <div className='bg-orange-600 p-4 border-2 border-slate-100 grow'>
                            <p className='text-3xl font-bold'>Active Cases</p>
                            <hr/>
                            <p className='text-xl'> <span className=''>Active: </span><span className='' >{myQuery.data.active}</span></p>
                            <p className='text-xl'> <span className=''>Active Per One Million: </span><span className='' >{myQuery.data.activePerOneMillion}</span></p>
                        </div>
                        <div className='bg-red-500 p-4 border-2 border-slate-100 grow'>
                            <p className='text-3xl font-bold'>Critical Cases</p>
                            <hr/>
                            <p className='text-xl'> <span className=''>Critical: </span><span className='' >{myQuery.data.critical}</span></p>
                            <p className='text-xl'> <span className=''>Critical Per One Million: </span><span className='' >{myQuery.data.criticalPerOneMillion}</span></p>
                        </div>
                        <div className='bg-slate-400 p-4 border-2 border-slate-100 grow'>
                            <p className='text-3xl font-bold'>Other Details</p>
                            <hr/>    
                            <p className='text-xl'> <span className=''>Population: </span><span className='' >{myQuery.data.population}</span></p>
                            <p className='text-xl'> <span className=''>Affected Countries: </span><span className='' >{myQuery.data.affectedCountries}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
