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
            <div>
                {
                    courses.data.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>
    );
};

export default Home;
