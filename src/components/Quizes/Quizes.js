import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const course = useLoaderData();
    const { id, questions } = course.data;
    return (
        <div>
            <h1>ALL QUiz questions will be here:{id}</h1>
            <h2>Questions: {questions[0].question}</h2>
            <h6>Options: {questions[0].options}</h6>

        </div>
    );
};

export default Quizes;