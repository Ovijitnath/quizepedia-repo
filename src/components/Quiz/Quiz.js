
import React from 'react';


const Quiz = (quiz) => {
    const { id, name, question, options } = quiz


    return (
        <div className='p-5 m-2 bg-neutral-300'>
            <div className='text-xl fw-bold'>
                <h1>Question: {quiz.quiz.question.slice(3, -4)}</h1>
            </div>


            <div className='fw-semibold'>
                {
                    quiz.quiz.options.map(option => <div>
                        <input type="radio" />{option}   </div>)
                }

                {

                }


            </div>
        </div>

    );
};

export default Quiz;