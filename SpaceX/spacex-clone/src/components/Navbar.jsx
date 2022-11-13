import React, { useState, } from 'react';
import { spacexLogo, menu, close } from '../assets/index';
import { hamburgerLinks, navLinks } from '../constants';
import './Navbar.css';

const Navbar = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <div className='bg-[url("./assets/ussf-44.webp")] bg-local pl-10 bg-center bg-cover bg-no-repeat h-[100vh]'>
                <header className='max-w-[1280px] mx-auto text-white flex items-center'>
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
                            </ul>
                        </nav>
                        <div>
                            <img src={active ? close : menu} onClick={() => setActive((prev) => !prev)} className="cursor-pointer pl-7 object-contain z-100" />
                            <div className={`${active ? 'flex' : 'hidden'} absolute top-0 md:right-[-60px] right-0 overflow-hidden bg-black h-[100vh] min-w-[340px]`}>
                                <ul className='flex flex-col items-end mt-20 uppercase w-[100%] mr-20 gap-3'>
                                    {hamburgerLinks.map((navBurger, index) => (
                                        <li key={navBurger.id}>
                                            <a href={`#${navBurger.id}`} className="border-b-[1px] border-b-neutral-700 hover:text-[#989fa6] ease-in-out duration-300 pb-2">
                                                {navBurger.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
            </div >
        </>
    );
}

export default Navbar;