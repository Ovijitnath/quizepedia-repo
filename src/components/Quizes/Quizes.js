import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const allquizes = useLoaderData();
    const quizes = allquizes.data;

    return (
        <div className='text-center'>

            <div className='mx-auto h-50'>
                <h1 className='text-2xl text-sky-900'>You have chosen  <strong>{quizes.name}</strong>! <br /> Here is your quiz questions! Think and answer!</h1>

            </div>

            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8 '>
                {
                    quizes.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }

            </div>

        </div>
    );
};

export default Quizes;