import React from 'react';

const About = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join Quizepedia, it's free and fun!</span>
                            <h3 className="text-3xl font-bold">Can Quizzes Help the Learning Process?</h3>
                            <p className="my-6 dark:text-gray-400"> As quizzes help to embed information in our brains, this provides a firm foundation for the next stage of learning. Take maths as an example – once something is mastered by making use of quizzes (methods of multiplication say) then this will help to support any future, more advanced learning (like algebra). Quizzes can help to prepare children for the next stage in their education and help the learning process.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join Quizepedia, it's free and fun!</span>
                            <h3 className="text-3xl font-bold">Do Quizzes Build Confidence?</h3>
                            <p className="my-6 dark:text-gray-400">Imagine, the first time you play a quiz you get 4 out of 10 right. So, you try to remember the answers and play it again. This time you get 8 out of 10. The more often you play quizzes the better you get at them and the more you know. Looking back over online quiz records and seeing how much they’ve improved, gives a student the confidence to know they are progressing. So, yes, quizzes do build confidence.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join Quizepedia, it's free and fun!</span>
                            <h3 className="text-3xl font-bold">Can Quizzes Help Revision?</h3>
                            <p className="my-6 dark:text-gray-400">Imagine it’s the history exam tomorrow and you want to revise. You could read through your history textbook and hope to remember everything. Or, you could play quizzes on the topics you’ve studied. These will help you revise the key points and are much more likely to help you remember than mere reading. Remember, quizzes help us to concentrate and keep our minds from wandering so they can, and do, help with revision.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;