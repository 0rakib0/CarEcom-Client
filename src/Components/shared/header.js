import React from 'react';
import Logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
    return (
        <>
            {/* // for larg and medium device */}
            <div className="bg-base-100 w-11/12 mx-auto md:flex lg: hidden  justify-between items-center">
                <div className="">
                    <Image src={Logo} width={100} height={100} alt='Logo' />
                </div>
                <div className="flex-none gap-2">
                    <label className="flex flex-row-reverse items-center gap-2 border p-2 rounded-[15px]">
                        <input type="text" className="grow outline-none" placeholder="Search" />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <select className="outline-none">
                            <option>All</option>
                            <option>New</option>
                            <option>Used</option>
                        </select>
                    </label>
                </div>
                <div className='flex item-center gap-2'>
                    <div>
                        <select className="">
                            <option disabled selected>English</option>
                            <option>Bangla</option>
                        </select>
                    </div>
                    <FaRegHeart className='mx-5 mt-[2px]'></FaRegHeart>
                    <FaRegUser></FaRegUser>
                    <Link href=''>Login</Link>/<Link href=''>Login</Link>
                </div>
            </div>

            {/* // for small design */}
            <div className="bg-base-100 w-11/12 mx-auto md:hidden  justify-between items-center">
                <div className='flex justify-between items-center'>
                    <div className="">
                        <Image src={Logo} width={100} height={100} alt='Logo' />
                    </div>
                    <div className='flex item-center gap-2'>
                        <div>
                            <select className="">
                                <option disabled selected>English</option>
                                <option>Bangla</option>
                            </select>
                        </div>
                        <FaRegHeart className='mx-5'></FaRegHeart>
                        <FaRegUser></FaRegUser>
                        <Link href=''>Login</Link>/<Link href=''>Login</Link>
                    </div>
                </div>
                <div className="flex-none gap-2 mb-2">
                    <label className="flex flex-row-reverse items-center gap-2 border p-2 rounded-[15px]">
                        <input type="text" className="grow outline-none" placeholder="Search" />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <select className="outline-none">
                            <option>All</option>
                            <option>New</option>
                            <option>Used</option>
                        </select>
                    </label>
                </div>

            </div>
        </>

    );
};

export default Header;