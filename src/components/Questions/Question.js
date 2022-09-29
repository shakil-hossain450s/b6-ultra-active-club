import React from 'react';

const Question = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-center text-[24px] font-semibold'>Questions Answer</h2>
            <div>
                <div tabindex="0" className="mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-xl">
                    <div className="px-8 collapse-title text-[22px] font-medium">
                        How does React works?
                    </div>
                    <div className="px-12 collapse-content">
                        <p>
                            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                        </p>
                    </div>
                </div>
                <div tabindex="1" className="mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-xl">
                    <div className="collapse-title text-xl font-medium">
                        Props and state difference?
                    </div>
                    <div className="px-12 collapse-content">
                        <p>
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                        </p>
                    </div>
                </div>
                <div tabindex="2" className="mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-xl">
                    <div className="collapse-title text-xl font-medium">
                        The useEffect key does anything other than Api data load
                    </div>
                    <div className="px-12 collapse-content">
                        <p>
                            What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;