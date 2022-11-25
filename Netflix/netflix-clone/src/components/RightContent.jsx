import React from 'react';

const RightContent = ({ title, paragraph, image }) => (
    <>
        <section className='border-t-8 border-[#333333] flex items-center justify-center'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
        </section>
    </>
)


export default RightContent;
