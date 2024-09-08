import React from 'react';
import Header from './header';
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <Header></Header>
            <hr />
            <div className="lg:flex justify-between items-center bg-base-100 w-11/12 mx-auto overflow-x-auto">

                <div className='flex gap-x-2 md:gap-x-4'>
                    <select className="border-t-2 border-white hover:border-t-2 hover:border-red-400 pt-2">
                        <option disabled selected>NEW CARS</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <select className="border-t-2 border-white hover:border-t-2 hover:border-red-400 pt-2">
                        <option disabled selected>BUY SELL USED CARS</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <select className="border-t-2 border-white hover:border-t-2 hover:border-red-400 pt-2">
                        <option disabled selected>NEWS, REVIEWS & VIDEOS</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <select className="border-t-2 border-white hover:border-t-2 hover:border-red-400 pt-2">
                        <option disabled selected>CAR SERVICE</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className='flex items-center my-2 lg:my-0 pt-2'>
                    <CiLocationOn></CiLocationOn>
                    <span>Select City</span>
                    <MdArrowDropDown></MdArrowDropDown>
                </div>
            </div>
        </>
    );
};

export default Navbar;