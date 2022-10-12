import React from 'react';
import { Link } from 'react-router-dom';

export const Course = ({ course }) => {
    const { id, name, logo, total } = course;

    return (

        <div className="max-w-md sm:mx-auto sm:text-center">

            <div className="object-cover w-full h-55 mb-6 rounded shadow-lg md:h-64 xl:h-70 hover:-translate-y-2 hover:shadow-2xl">
                <img className='h-50' src={logo} alt="" />

                <h6 className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</h6>
                <p className="mb-3 text-sm font-semibold text-gray-900">
                    Total Question: {total}
                </p>
                <Link to={`/quizes/${id}`}><button className='bg-blue-500 px-3 text-white rounded shadow-xl'>Start Quiz</button></Link>
            </div>

        </div>
    );
};
export default Course;