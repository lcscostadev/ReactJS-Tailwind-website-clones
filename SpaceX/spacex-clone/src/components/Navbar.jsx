import React from 'react';
import { spacexLogo } from '../assets/index';
import { navLinks } from '../constants';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='bg-[url("./assets/ussf-44.webp")] bg-local bg-center bg-cover bg-no-repeat h-[100vh]'>
                <header className='max-w-[1280px] m-auto  text-white '>
                    <nav className='flex pt-8'>
                        <img src={spacexLogo} alt="spaceX Logo" className='max-w-[230px]' />
                        <ul className='flex gap-5 font-bold items-end justify-between'>
                            {navLinks.map((nav, index) => (
                                <li key={nav.id} className="text-[13px]" >
                                    <a href={`#${nav.id}`} className="links py-2 uppercase">{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                        {/* <div>
                            <button>shop</button>
                            <button>shop</button>
                        </div> */}
                    </nav>
                </header>
                <main>
                    <section className='max-w-[1280px] m-auto mt-[560px] text-white'>
                        <h3 className='text-[18px] uppercase'>recent mission</h3>
                        <h1 className='text-[45px] uppercase font-bold'>ussf-44 mission</h1>
                        <button>REWATCH</button>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Navbar;