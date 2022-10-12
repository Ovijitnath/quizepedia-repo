
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;

    const notify = () => toast(correctAnswer);

    return (

        <div className='p-5 m-2 bg-neutral-300'>
            <div className='text-xl fw-bold'>
                <h1 className='text-cyan-900'>{question.slice(3, -4)}</h1>

            </div>
            <div className="radio-buttons">
                {options.map(option => <div >  <input
                    type="radio"
                    name="radio"
                    onChange={() => {
                        if (correctAnswer === option) {

                            toast("Your Answer is Right!");
                        } else {
                            toast("Sorry! Your Answer is wrong!");
                        }
                    }}
                    className="radio checked:bg-red-500"
                /> {option} </div>)}
                <ToastContainer />



            </div>

            <div className='pt-4 text-lime-700'>
                Correct Answer: <FontAwesomeIcon icon={faEye} onClick={notify} />
                <ToastContainer />
            </div>
        </div>
    )
};

export default Quiz;