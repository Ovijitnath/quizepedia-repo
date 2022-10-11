import React from 'react';

export const Course = ({ course }) => {
    const { name, logo, total } = course;
    return (

        <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-26 h-36 mb-5 rounded-full bg-indigo-50 sm:mx-auto sm:w-28 sm:h-24">
                <img src={logo} alt="" />
            </div>
            <div className='mt-5'>
                <h6 className="mb-3 text-xl font-bold leading-">{name}</h6>
                <p className="mb-3 text-sm text-gray-900">
                    Total Question: {total}
                </p></div>
            <button className='bg-blue-500 px-3 text-white rounded-sm'>Start Quiz</button>
        </div>
    );
};
export default Course;