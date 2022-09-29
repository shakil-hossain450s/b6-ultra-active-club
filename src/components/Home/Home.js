import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Cards from '../Cards/Cards';
import List from '../List/List';

const Home = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className='home-container '>
            <div className="left-side ml-12 mt-8">
                <div className='logo flex justify-start items-center'>
                    < FontAwesomeIcon className='text-4xl mr-3 text-blue-700 ' icon={faDumbbell} ></FontAwesomeIcon >
                    <h2 className='text-4xl font-bold text-blue-700'>Active Club</h2>
                </div >
                <Cards activities={activities}></Cards>
            </div >
            <div className="">
                <List></List>
            </div>
        </div >
    );
};

export default Home;