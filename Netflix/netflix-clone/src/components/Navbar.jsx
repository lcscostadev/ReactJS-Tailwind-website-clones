import React from 'react';
import { netflixLogo } from '../assets';

const Navbar = () => {
    return (
        <>
            <header className='flex items-center justify-between pr-[30px]'>
                <div>
                    <img src={netflixLogo} alt="" className='w-[250px] py-[20px] px-[30px]' />
                </div>
                <div className='flex gap-7 items-center'>
                    <select name="select" id="lang" className='bg-transparent p-1'>
                        <option value="portuguese" className='bg-gray-400'>Portuguese</option>
                        <option value="english" selected className='bg-gray-400'>English</option>
                    </select>
                    <button className='bg-red-600 px-3 py-1 rounded-sm'>Sign In</button>
                </div>
            </header>
        </>
    );
}

export default Navbar;