import React from 'react';

export const Course = ({ course }) => {
    const { name, logo, total } = course;
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 grid">

            <div className="card border grid gap-8 row-gap-10 sm:grid-cols-4">
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-26 h-36 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <img src={logo} alt="" />
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
                    <p className="mb-3 text-sm text-gray-900">
                        Total Question: {total}
                    </p>
                    <button className='bg-blue-500 px-3 text-white rounded-sm'>Start Quiz</button>
                </div>

            </div>
        </div>
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             Shoes!
        //             <div className="badge badge-secondary">NEW</div>
        //         </h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <div className="badge badge-outline">Fashion</div>
        //             <div className="badge badge-outline">Products</div>
        //         </div>
        //     </div>
        // </div>

    );
};
export default Course;