import React from 'react';
import './Card.css';

const Card = ({ activity }) => {
    const { name, picture, about, time } = activity;

    return (
        <div className='mt-8'>
            <div className="card w-75 bg-base-100 shadow-xl border">
                <figure><img className='h-52 w-100 mt-2 p-2' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{about ? about.slice(0, 85) + '...' : about}</p>
                    <p>For Age: <span className='font-semibold'>20-25</span></p>
                    <p>Time Required: <span className='font-semibold'>{time}s</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full mt-5">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;