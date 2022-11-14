import React from 'react';

const SameSection = ({ subtitle, title, button, image }) => {
    return (
        <div >
            <section className='max-w-[1280px] m-auto justify-end pb-36 flex-col flex h-[100vh]  text-white'>
                <div>
                    <h3 className='text-[13px] md:text-[18px] uppercase'>{subtitle}</h3>
                    <h1 className='text-[30px] mb:text-[45px] uppercase font-bold max-w-[500px] md:max-w-[500px] leading-10 pb-7'>{title}</h1>
                    <button className='btn border-2 py-4 px-12 text-[13px] font-bold'>{button}</button>
                </div>
            </section>
        </div >
    );

}


export default SameSection;