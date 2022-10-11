import React from 'react';

export const Course = ({ course }) => {
    const { name, logo, total } = course;
    return (

        <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="object-cover w-full h-55 mb-6 rounded shadow-lg md:h-64 xl:h-70">
                <img className='h-50' src={logo} alt="" />


                <h6 className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</h6>
                <p className="mb-3 text-sm text-gray-900">
                    Total Question: {total}
                </p>
                <button className='bg-blue-500 px-3 text-white rounded shadow-xl'>Start Quiz</button>
            </div>
        </div>
    );
};
export default Course;