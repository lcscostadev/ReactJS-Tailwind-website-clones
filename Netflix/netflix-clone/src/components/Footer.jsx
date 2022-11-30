import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='text-[#737373] flex flex-col pt-14 lg:ml-72 md:ml-16'>
                <p >Questions? Call 0800 591 8943</p>
                <div className=' flex items-start md:gap-16 lg:gap-40 py-5'>
                    <ul className='flex flex-col gap-3 text-xs'>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Investor Relations</a>
                        </li>
                        <li>
                            <a href="#">Ways to Watch</a>
                        </li>
                        <li>
                            <a href="#">Corporate Information</a>
                        </li>
                        <li>
                            <a href="#">Only on Netflix</a>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-4  text-xs'>
                        <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-4 text-xs'>
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">Redeem Gift Cards</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Speed Test</a>
                        </li>
                    </ul>


                    <ul className='flex flex-col gap-4 text-xs'>
                        <li>
                            <a href="#">Media Center</a>
                        </li>
                        <li>
                            <a href="#">Buy Gift Cards</a>
                        </li>
                        <li>
                            <a href="#">Cookie Preferences</a>
                        </li>
                        <li>
                            <a href="#">Legal Notices</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <select name="select" id="lang" className='bg-transparent px-3 py-3 mb-4'>
                        <option value="portuguese" className='bg-gray-400'>Portuguese</option>
                        <option value="english" selected className='bg-gray-400'>English</option>
                    </select>
                </div>

                <p className=' mb-6 text-sm'>Netflix United States</p>
            </div>
        </>
    );
}

export default Footer;