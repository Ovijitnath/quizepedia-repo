import React from 'react';

// const Course = ({ course }) => {
//     const { name, logo, total } = course;
//     return (
//         <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
//             <img src={logo} alt="" />
//             <h3>{name}</h3>
//             <p>{total}</p>
//         </div>
//     );
// };


export const Course = ({ course }) => {
    const { name, logo, total } = course;
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 grid">

            <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-26 h-36 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <img src={logo} alt="" />
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
                    <p className="mb-3 text-sm text-gray-900">
                        Total Question: {total}
                    </p>
                    <button className='bg-blue-500 rounded-sm'>Start Quiz</button>
                </div>

            </div>
        </div>

    );
};
export default Course;