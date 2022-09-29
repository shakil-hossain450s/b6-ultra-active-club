import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = (props) => {
    const { activities, handleAddToTime } = props;



    return (
        <div className='mt-5 mx-5'>
            <h2 className='text-2xl font-semibold'>Select Your Activity</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    activities.map(activity => <Card
                        key={activity.id}
                        activity={activity}
                        handleAddToTime={handleAddToTime}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;