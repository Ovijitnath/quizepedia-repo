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
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
                    <p className="mb-3 text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart attack never
                        stopped old Big Bear. I didn't even know we were calling him Big
                        Bear. We never had the chance to.
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>

            </div>
        </div>

    );
};
export default Course;