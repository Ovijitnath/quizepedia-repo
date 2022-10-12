import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option }) => {
    const { correctAnswer, quiz } = option;
    console.log(correctAnswer)
    const handleQuizAns = () => {
        if (option !== correctAnswer) {

            toast("Wrong Answer");
        }
        else {
            toast(" Right Answer")
        }
    };

    return (
        <div>

            <input id="windows"
                value="windows"
                name="platform"
                type="radio"
                onClick={handleQuizAns}
            />{option}
        </div>
    );
};

export default Option;