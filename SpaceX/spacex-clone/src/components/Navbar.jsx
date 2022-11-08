import React from 'react';
import { spacexLogo } from '../assets/index';
import { navLinks } from '../constants';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='bg-[url("./assets/ussf-44.webp")] bg-local bg-center bg-cover bg-no-repeat h-[100vh]'>
                <header className='max-w-[1280px] mx-auto text-white '>
                    <div className='flex py-8 items-end'>
                        <a href="#"><img src={spacexLogo} alt="SpaceX Logo" className='max-w-[230px] mr-2' /></a>
                        <nav>
                            <ul className='flex gap-5 font-bold uppercase text-[13px]'>
                                {navLinks.map((nav, index) => (
                                    <li key={nav.id}>
                                        <a href={`#${nav.id}`} className=" py-2 links">
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <section className='max-w-[1280px] m-auto mt-[560px] text-white'>
                        <h3 className='text-[18px] uppercase'>recent mission</h3>
                        <h1 className='text-[45px] uppercase font-bold'>ussf-44 mission</h1>
                        <button className='btn border-2 py-4 px-12 text-[13px] font-bold'>REWATCH</button>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Navbar;