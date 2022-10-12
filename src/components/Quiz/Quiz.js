
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option';

const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz
    const notify = () => toast(correctAnswer);

    // const handleQuizAns = () => {
    //     if (options.option !== correctAnswer) {

    //         toast("Wrong Answer");
    //     }
    //     else {
    //         toast(" Right Answer")
    //     }
    // };


    return (

        <div className='p-5 m-2 bg-neutral-300'>
            <div className='text-xl fw-bold'>
                <h1 className='text-cyan-900'>{question.slice(3, -4)}</h1>

                <FontAwesomeIcon icon={faEye} onClick={notify} />
                <ToastContainer />
            </div>

            <div className='fw-semibold'>


                {

                    options.map(option => <Option key={option.id} option={option}></Option>
                        // <div>
                        //     <input id="windows"
                        //         value="windows"
                        //         name="platform"
                        //         type="radio"
                        //         onClick={handleQuizAns}
                        //     />{option}  <ToastContainer /> </div>
                    )

                }

                {/* <div>
                    <button onClick={handleQuizAns}>{options}</button>
                    <ToastContainer />
                </div> */}

            </div>

        </div>


    )

};

export default Quiz;