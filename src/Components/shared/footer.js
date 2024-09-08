import React from 'react';
import FooterTop from './footerTop';
import Image from 'next/image';
import logo from "@/assets/logo.png"
const Footer = () => {
    return (
        <>
        <FooterTop></FooterTop>
            <footer className="md:flex gap-2 items-center justify-between text-base-content p-10">
                
                <nav>
                    <h6 className="text-md">About CarDekho</h6>
                    <ul>
                        <li> <a className="link link-hover text-gray-400">Branding</a></li>
                        <li> <a className="link link-hover text-gray-400">Design</a></li>
                        <li>  <a className="link link-hover text-gray-400">Marketing</a></li>
                        <li> <a className="link link-hover text-gray-400">Advertisement</a></li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="text-md">Connect With Us</h6>
                    <ul>
                        <li> <a className="link link-hover text-gray-400">Branding</a></li>
                        <li> <a className="link link-hover text-gray-400">Design</a></li>
                        <li>  <a className="link link-hover text-gray-400">Marketing</a></li>
                        <li> <a className="link link-hover text-gray-400">Advertisement</a></li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="text-md">OTHERS</h6>
                    <ul>
                        <li> <a className="link link-hover text-gray-400">Branding</a></li>
                        <li> <a className="link link-hover text-gray-400">Design</a></li>
                        <li>  <a className="link link-hover text-gray-400">Marketing</a></li>
                        <li> <a className="link link-hover text-gray-400">Advertisement</a></li>
                    </ul>
                </nav>

                <aside className='md:w-4/12'>
                    <Image src={logo} width={200} height={200} className='mx-auto' alt='Logo'/>
                    <p>
                    ইংরেজি থেকে অনুবাদ করা হয়েছে-প্রকাশনা এবং গ্রাফিক ডিজাইনে, Lorem ipsum হল একটি স্থানধারক পাঠ্য যা সাধারণত অর্থপূর্ণ বিষয়বস্তুর উপর নির্ভর না করে একটি নথি বা
                    </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;