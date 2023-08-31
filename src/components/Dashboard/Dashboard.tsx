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
                        <div className="bg-yellow-600 p-4 drop-shadow-md grow rounded-lg">
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'> <span>Total Cases: </span><span>{myQuery.data.cases}</span></p>
                            <hr/>
                            <p className='flex justify-between text-xl'> <span>Cases per one million: </span><span>{myQuery.data.casesPerOneMillion}</span></p>
                            <p className='flex justify-between text-xl'> <span>Today cases: </span><span>{myQuery.data.todayCases}</span></p>
                            <p className='flex justify-between text-xl'> <span>One case per people: </span><span>{myQuery.data.oneCasePerPeople}</span></p>
                        </div>
                        <div className='bg-red-600 p-4 drop-shadow-md grow rounded-lg'>
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'> <span>Total Deaths: </span><span>{myQuery.data.deaths}</span></p>
                            <hr/>
                            <p className='flex justify-between text-xl'> <span>Deaths per onw million: </span><span>{myQuery.data.deathsPerOneMillion}</span></p>
                            <p className='flex justify-between text-xl'> <span>Today deaths: </span><span>{myQuery.data.todayDeaths}</span></p>
                            <p className='flex justify-between text-xl'> <span>One death per people: </span><span>{myQuery.data.oneDeathPerPeople}</span></p>
                        </div>
                        <div className='bg-green-600 p-4 drop-shadow-md grow rounded-lg'>
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'> <span>Total Recovered: </span><span>{myQuery.data.recovered}</span></p>
                            <hr/>
                            <p className='flex justify-between text-xl'> <span>Today recovered: </span><span>{myQuery.data.todayRecovered}</span></p>
                            <p className='flex justify-between text-xl'> <span>Recovered per one million: </span><span>{myQuery.data.recoveredPerOneMillion}</span></p>

                        </div>
                        <div className='bg-blue-600 p-4 drop-shadow-md grow rounded-lg'>
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'> <span>Total Tests: </span><span>{myQuery.data.tests}</span></p>
                            <hr/>
                            <p className='flex justify-between text-xl'> <span>Tests per one million: </span><span>{myQuery.data.testsPerOneMillion}</span></p>
                            <p className='flex justify-between text-xl'> <span>One test per people: </span><span >{myQuery.data.oneTestPerPeople}</span></p>
                        </div>
                        <div className='bg-orange-600 p-4 drop-shadow-md grow rounded-lg'>
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'>Active Cases</p>
                            <hr/>
                            <p className='flex justify-between text-xl'> <span>Active: </span><span>{myQuery.data.active}</span></p>
                            <p className='flex justify-between text-xl'> <span>Active per one million: </span><span>{myQuery.data.activePerOneMillion}</span></p>
                        </div>
                        <div className='bg-red-500 p-4 drop-shadow-md grow rounded-lg'>
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'>Critical Cases</p>
                            <hr/>
                            <p className='flex justify-between text-xl'> <span>Critical cases: </span><span>{myQuery.data.critical}</span></p>
                            <p className='flex justify-between text-xl'> <span>Critical per one million: </span><span>{myQuery.data.criticalPerOneMillion}</span></p>
                        </div>
                        <div className='bg-slate-400 p-4 drop-shadow-md grow rounded-lg'>
                            <p className='flex justify-between text-xl sm:text-3xl font-bold'>Other Details</p>
                            <hr/>    
                            <p className='flex justify-between text-xl'> <span>Population: </span><span>{myQuery.data.population}</span></p>
                            <p className='flex justify-between text-xl'> <span>Affected Countries: </span><span>{myQuery.data.affectedCountries}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
