import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {
    const courses = useLoaderData();

    return (
        <div>
            {
                courses.data.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Home;
