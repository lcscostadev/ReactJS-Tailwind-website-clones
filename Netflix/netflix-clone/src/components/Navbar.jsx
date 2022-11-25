import React from 'react';
import { netflixLogo } from '../assets';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <hr className='p-2 invisible' />
            <header className=' bg-[url("./assets/background.jpg")] lg:h-[80vh] h-[60vh]'>
                <nav className='flex items-center justify-between pr-[30px] mb-16 lg:mb-36'>
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

                <section className='flex gap-4 flex-col text-center font-[roboto]'>
                    <h1 className='text-[1.8rem] font-bold leading-7 lg:text-[4rem] lg:leading-[70px]'>Unlimited movies, TV <br /> shows, and more.</h1>
                    <h3 className='text-[1rem] lg:text-[1.5rem] font-normal'>Watch anywhere. Cancel anytime.</h3>
                    <p className='font-normal max-w-[250px] lg:max-w-[800px] mx-auto'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='flex items-center justify-center flex-col lg:flex-row'>
                        <input type="text" className='py-3 mb-3 lg:mb-0 w-[365px] lg:py-5 px-2 text-sm lg:text-lg lg:w-[450px] outline-blue-700' placeholder='Email address' />
                        <button className='py-2 lg:py-[16px] bg-[#e50914] rounded-sm lg:rounded-none px-5 lg:px-6 lg:text-[1.5rem] hover:bg-[#f40612]'>Get Started</button>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Navbar;