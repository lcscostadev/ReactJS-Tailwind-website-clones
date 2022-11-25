import React from 'react';

const LeftContent = ({ title, paragraph, image }) => (
    <>
        <section className='border-t-8 border-[#333333] flex items-center justify-center'>
            <div>
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </section>
    </>
)

export default LeftContent;
