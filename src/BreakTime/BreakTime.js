import React from 'react';

const BreakTime = (props) => {
    const { list, clickToAddBreakTime } = props;

    const times = [20, 50, 90, 120, 150];
    return (
        <div>
            <div className='mt-8'>
                <p className='text-[20px]'>Add a Break</p>
                <div className='flex items-center justify-around mt-5 bg-slate-200 p-5 rounded-lg text-white font-medium'>
                    {
                        times.map(time => (
                            <p onClick={() => clickToAddBreakTime(time)} className='bg-blue-600 p-3 mr-1 rounded-xl hover:bg-blue-700 transition-all cursor-pointer'>{time}</p>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default BreakTime;