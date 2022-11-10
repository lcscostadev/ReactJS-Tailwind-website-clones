import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
    return (
        <footer>
            <div className='flex items-center justify-center gap-10 py-10 bg-black text-white'>
                <p className='text-[11px] text-[#979797]'>SPACEX © 2022</p>
                <ul className='flex gap-10 font-bold uppercase text-[11px]'>
                    {footerLinks.map((link, index) => (
                        <li key={link.name}>
                            <a href={`${link.link}`}>
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