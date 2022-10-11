import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const allquizes = useLoaderData();
    const quizes = allquizes.data;

    return (
        <div className='text-center'>
            <h1 className='text-2xl'>ALL <strong>{quizes.name}</strong> related Quiz questions will be here!!!</h1>

            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>
                {
                    quizes.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
                {/* <h1>ALL QUiz questions will be here:{id}</h1>
            <h2>Questions: {questions[0].question}</h2>
            <h6>Options: {questions[0].options}</h6> */}
            </div>

        </div>
    );
};

export default Quizes;