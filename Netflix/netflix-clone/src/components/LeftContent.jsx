import React from 'react';

const LeftContent = ({ title, paragraph, image }) => (
    <>
        <section className='border-t-8 border-[#333333] flex flex-col lg:flex-row items-center gap-0 lg:gap-12 lg:text-start text-center pt-14 justify-center'>
            <div>
                <h1 className='text-[23px] md:text-[2.5rem] lg:text-[3rem] font-bold'>{title}</h1>
                <p className='max-w-[330px] md:text-[1.2rem] md:max-w-[600px] lg:text-[1.4rem] lg:max-w-[450px]'>{paragraph}</p>
            </div>
            <div>
                <img src={image} alt="" className=' max-w-[250px] md:max-w-[500px] lg:max-w-[450px] pb-20' />
            </div>
        </section>
    </>
)

export default LeftContent;
