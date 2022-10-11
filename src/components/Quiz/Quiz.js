import React from 'react';

const Quiz = (quiz) => {
    const { id, name, question, options } = quiz


    return (
        <div>
            <h1>Question: {quiz.quiz.question.slice(3, -4)}</h1>


            {
                quiz.quiz.options.map(option => <div> Options:<input type="radio" />{quiz.quiz.options}   </div>)
            }
            {/* {quiz.quiz.options} */}
        </div>

    );
};

export default Quiz;