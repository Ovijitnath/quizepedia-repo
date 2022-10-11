import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SubHeader from '../SubHeader/SubHeader';

const Home = () => {
    const courses = useLoaderData();

    return (

        <div>
            <div>
                <SubHeader></SubHeader>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>
                    {
                        courses.data.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;
