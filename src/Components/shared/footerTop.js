import React from 'react';
import { FaAward } from "react-icons/fa";
import { TbCarGarage } from "react-icons/tb";
import { MdOutlineLocalOffer, MdOutlineCompare } from "react-icons/md";
const FooterTop = () => {
    return (
        <div className='py-6 border-y mt-4'>
            <div className='w-11/12 mx-auto md:flex justify-between itms-center'>
                <div className='flex items-center gap-2 mt-2 md:mt-0'>
                    <FaAward className='text-5xl'></FaAward>
                    <div>
                        <p className='text-xl font-semibold'>India’s #1</p>
                        <p className='text-gray-400'>Largest Auto portal</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-2 md:mt-0'>
                    <TbCarGarage className='text-5xl'></TbCarGarage>
                    <div>
                        <p className='text-xl font-semibold'>Car Sold</p>
                        <p className='text-gray-400'>Every 4 minute</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-2 md:mt-0'>
                    <MdOutlineLocalOffer className='text-5xl'></MdOutlineLocalOffer>
                    <div>
                        <p className='text-xl font-semibold'>Offers</p>
                        <p className='text-gray-400'>Stay updated pay less</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-2 md:mt-0'>
                    <MdOutlineCompare className='text-5xl'></MdOutlineCompare>
                    <div>
                        <p className='text-xl font-semibold'>Compare</p>
                        <p className='text-gray-400'>Decode the right car</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;