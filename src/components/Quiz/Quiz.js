
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz
    const notify = () => toast(correctAnswer);


    return (

        <div className='p-5 m-2 bg-neutral-300'>
            <div className='text-xl fw-bold'>
                <h1 className='text-cyan-900'>{question.slice(3, -4)}</h1>

                <FontAwesomeIcon icon={faEye} onClick={notify} />
                <ToastContainer />
            </div>

            <div className='fw-semibold'>

                {
                    options.map(option => <div>
                        <input id="windows"
                            value="windows"
                            name="platform"
                            type="radio"
                        />{option} </div>)
                }

            </div>

        </div>

    );
};

export default Quiz;