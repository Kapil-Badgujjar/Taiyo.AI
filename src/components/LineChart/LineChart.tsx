import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Line } from '@ant-design/plots';       // From Ant Desing library

export default function LineChart() {
    
    // using react query to make intelligent data fetching 
    // it enables automatic retrying
    const myQuery = useQuery({
        queryKey: ['data'],
        queryFn: () =>
            axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(response => response.data)
    });

    if (myQuery.isLoading) return <h1>Loading...</h1>;  //when data is loading
    if (myQuery.error) return <h1>Error</h1>; // if any error is encountered

    const tempData = myQuery.data;

    // extracting all keys from the data received
    const keysNames = Object.keys(tempData);
    
    let dataArray: any = [];

    // mapping all keys and processing data of each key object for making it compatible with our line graph of ant design
    keysNames.forEach(key =>{
        dataArray = [...dataArray, ...Object.entries(tempData[key]).map(([date, value]) => ({ date, value, category: key }))];
    });
    console.log(dataArray);
    return (
        <div className='w-full p-4 box-border'>
            <div>
                <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-700 py-4'>Daily case fluctuations</h1>
            </div>
            <div>
                {/* ploting line graph */}
                <Line
                    data={dataArray}    
                    xField="date"   // date on x axis
                    yField="value"  //y vlaues on y axis
                    seriesField='category'      // select category filed 
                    smooth
                />
            </div>
        </div>
    );
}
