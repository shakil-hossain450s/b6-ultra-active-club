import React from 'react';
import ListHeader from '../List-Header/ListHeader';
import './List.css';


const List = (props) => {
    return (
        <div className='bg-slate-100 list-container p-5'>
            <ListHeader></ListHeader>
            <div className='mt-6 flex items-center justify-around bg-slate-200 p-5 rounded-lg'>
                <h3>
                    <p>
                        <span className='text-[25px] font-semibold'>75</span>
                        <sub>kg</sub>
                    </p>
                    <p>Weight</p>
                </h3>
                <h3>
                    <p>
                        <span className='text-[25px] font-semibold'>5.7</span>
                    </p>
                    <p>Height</p>
                </h3>
                <h3>
                    <p>
                        <span className='text-[25px] font-semibold'>17</span>
                        <sub>yrs</sub></p>
                    <p>Age</p>
                </h3>
            </div>

            <div className='mt-8'>
                <p className='text-[20px]'>Add a Break</p>
                <div className='flex items-center justify-around mt-5 bg-slate-200 p-5 rounded-lg text-white font-medium'>
                    <p className='bg-blue-600 p-3 mr-1 rounded-xl hover:bg-blue-700 transition-all cursor-pointer'>20s</p>
                    <p className='bg-blue-600 p-3 mr-1 rounded-xl hover:bg-blue-700 transition-all cursor-pointer'>50s</p>
                    <p className='bg-blue-600 p-3 mr-1 rounded-xl hover:bg-blue-700 transition-all cursor-pointer'>80s</p>
                    <p className='bg-blue-600 p-3 mr-1 rounded-xl hover:bg-blue-700 transition-all cursor-pointer'>120s</p>
                    <p className='bg-blue-600 p-3 mr-1 rounded-xl hover:bg-blue-700 transition-all cursor-pointer'>200s</p>
                </div>

            </div>

            <div className='mt-8'>
                <h2 className='text-[18px] mb-3'>Exercise Details</h2>
                <div className='flex justify-between bg-slate-200 p-5 rounded-lg mb-3'>
                    <p>Exercise Time: </p>
                    <span>200 seconds</span>
                </div>
                <div className='flex justify-between bg-slate-200 p-5 rounded-lg'>
                    <p>Exercise Time: </p>
                    <span>200 seconds</span>
                </div>
                <button className='btn btn-primary block w-60 mx-auto mt-5'>Activity Complete</button>
            </div>
        </div>
    );
};

export default List;