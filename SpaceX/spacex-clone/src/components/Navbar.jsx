import React from 'react';
import { spacexLogo } from '../assets/index';
import { navLinks } from '../constants';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='bg-[url("./assets/ussf-44.webp")] bg-local pl-10 bg-center bg-cover bg-no-repeat h-[100vh]'>
                <header className='max-w-[1280px] mx-auto text-white'>
                    <div className='flex py-6 items-end lg:justify-start fixed top-0'>
                        <a href="#"><img src={spacexLogo} alt="SpaceX Logo" className='lg:max-w-[230px] max-w-[150px] mr-2' /></a>
                        <nav>
                            <ul className='hidden lg:flex lg:items-end font-bold uppercase text-[13px]'>
                                {navLinks.map((nav, index) => (
                                    <li key={nav.id} className={`${index === navLinks.length - 1 ? 'ml-[530px]' : 'mr-5'}`}>
                                        <a href={`#${nav.id}`} className=" py-2 links">
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}
                                <div className='flex items-center gap-2'>
                                    <div id="nav-icon3">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <section className='max-w-[1280px] m-auto justify-end pb-36 flex-col flex h-[100vh]  text-white'>
                        <div>
                            <h3 className='text-[18px] uppercase'>recent mission</h3>
                            <h1 className='text-[45px] uppercase font-bold'>ussf-44 mission</h1>
                            <button className='btn border-2 py-4 px-12 text-[13px] font-bold'>REWATCH</button>
                        </div>
                    </section>
                    {/* <div className='flex'>
                        <span></span>
                        <span></span>
                    </div> */}
                </main>
            </div>
        </>
    );
}

export default Navbar;