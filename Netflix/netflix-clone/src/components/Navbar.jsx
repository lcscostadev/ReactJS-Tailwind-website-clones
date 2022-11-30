import React from 'react';
import { netflixLogo } from '../assets';
import { EmailInput } from './index';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <hr className='p-2 invisible' />
            <header className=' bg-[url("./assets/background.jpg")] lg:h-[80vh] md:h-[85vh] h-[60vh]'>
                <nav className=' flex items-center justify-between pr-[30px] mb-16'>
                    <div>
                        <img src={netflixLogo} alt="" className='w-[170px] lg:w-[250px] py-[20px] px-[30px]' />
                    </div>
                    <div className='flex gap-3 lg:gap-7 items-center'>
                        <select name="select" id="lang" className='bg-transparent p-1'>
                            <option value="portuguese" className='bg-gray-400'>Portuguese</option>
                            <option value="english" selected className='bg-gray-400'>English</option>
                        </select>
                        <button className='bg-[#e50914] lg:px-4 px-2 py-1 rounded-sm text-[0.8rem] lg:text-[1rem]'>Sign In</button>
                    </div>
                </nav>

                <section className='flex gap-4 flex-col text-center font-[roboto] md:pt-20'>
                    <h1 className='text-[1.8rem] font-bold leading-7 lg:text-[4rem] lg:leading-[70px] md:text-[3rem] md:leading-[50px]'>Unlimited movies, TV <br /> shows, and more.</h1>
                    <h3 className='text-[1rem] md:text-[1.5rem] font-normal '>Watch anywhere. Cancel anytime.</h3>
                    <EmailInput className="md:mb-[300px]" />
                </section>
            </header>
        </>
    );
}

export default Navbar;