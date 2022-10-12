import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleState from '../SIngleState/SingleState';


const Statistics = () => {
    const loaderData = useLoaderData()
    const stateData = loaderData.data
    return (
        <div className='p-3 bg-Teal-100'>
            <h1 className='fw-bolder font-black text-center text-lg'> STATISTICS</h1>
            <SingleState key={stateData.id} stateData={stateData}></SingleState>
        </div>
    );
};

export default Statistics;