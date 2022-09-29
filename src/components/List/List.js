import React, { useState } from 'react';
import BreakTime from '../../BreakTime/BreakTime';
import ListHeader from '../List-Header/ListHeader';
import ListInfo from '../ListInfo/ListInfo';
import './List.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const List = ({ list }) => {
    const [breakTime, setBreakTime] = useState([]);

    let totalTime = 0;
    for (const activity of list) {
        totalTime = totalTime + activity.time;
    }

    let prevBreakTime = 0;
    const clickToAddBreakTime = (time) => {
        prevBreakTime = prevBreakTime + time;
        setBreakTime(prevBreakTime);

    }

    const notify = () => toast.success("WOW! Activity Completed.", {
        position: "top-center",
    });
    return (
        <div className='bg-slate-100 list-container p-5'>
            <ListHeader></ListHeader>
            <ListInfo></ListInfo>
            <BreakTime list={list} clickToAddBreakTime={clickToAddBreakTime}></BreakTime>
            <div className='mt-8'>
                <h2 className='text-[18px] mb-3'>Exercise Details</h2>
                <div className='flex justify-between bg-slate-200 p-5 rounded-lg mb-3'>
                    <p>Exercise Time: </p>
                    <span>{totalTime} s</span>
                </div>
                <div className='flex justify-between bg-slate-200 p-5 rounded-lg'>
                    <p>Break Time: </p>
                    <span>{breakTime + 0} s</span>
                </div>
                <button onClick={notify} className='btn btn-primary block w-60 mx-auto mt-5'>Activity Complete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default List;