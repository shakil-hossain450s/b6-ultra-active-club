import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const ListHeader = () => {
    return (
        <div>
            <div className='flex items-center my-3'>
                <div class="avatar">
                    <div class="w-12 rounded-full border ">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className='ml-5'>
                    <h2 className="text-[20px] font-semibold">Md Shakil Hossain</h2>
                    <FontAwesomeIcon className='mr-2 text-gray-400' icon={faLocationDot}></FontAwesomeIcon>
                    <span>Bheramara, Kushtia</span>
                </div>
            </div>
        </div>
    );
};

export default ListHeader;