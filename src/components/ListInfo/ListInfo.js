import React from 'react';

const ListInfo = () => {
    return (
        <div>
            <div className='mt-4 flex items-center justify-around bg-slate-200 p-3 rounded-lg'>
                <h3>
                    <p>
                        <span className='text-[20px] font-semibold'>55</span>
                        <sub>kg</sub>
                    </p>
                    <p>Weight</p>
                </h3>
                <h3>
                    <p>
                        <span className='text-[20px] font-semibold'>5.7</span>
                    </p>
                    <p>Height</p>
                </h3>
                <h3>
                    <p>
                        <span className='text-[20px] font-semibold'>17</span>
                        <sub>yrs</sub></p>
                    <p>Age</p>
                </h3>
            </div>
        </div>
    );
};

export default ListInfo;