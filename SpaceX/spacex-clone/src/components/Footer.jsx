import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-wrap items-center gap-2 justify-center md:gap-10 py-10 pt-20 sm:py-10  bg-black text-white'>
                <p className='text-[11px] text-[#979797]'>SPACEX © 2022</p>
                <ul className='flex flex-wrap justify-center gap-5 md:gap-10 font-bold uppercase text-[11px]'>
                    {footerLinks.map((link, index) => (
                        <li key={link.name}>
                            <a href={`${link.link}`} className="hover:text-[#989fa6] ease-in-out duration-300" target="_blank">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        </footer>
    );
}

export default Footer;