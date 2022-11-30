import React, { useState } from 'react';
import { accordionData } from '../constants';
import './Accordion.css';
import EmailInput from './EmailInput';

const Accordion = () => {

    const [selected, setSelected] = useState(null);

    // close if another is open
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <>
            <div className='border-b-8 pb-14 border-[#333333]'>
                <h1 className='text-[1.5rem]  max-w-[100%] lg:max-w-[100%] lg:text-[2.7rem] text-center py-10 font-bold border-t-8 border-[#333333]'>Frequently Asked Questions</h1>
                <div className='w-[425px] 2xs:w-[320px]  lg:w-[780px] md:w-[640px] mx-auto mb-14'>
                    {accordionData.map((item, i) => (
                        <div className='bg-[#303030] mb-2 py-5 md:py-2 md:px-5 px-7'>
                            <div className='flex items-center justify-between cursor-pointer' onClick={() => toggle(i)}>
                                <h2 className='lg:text-2xl text-md'>{item.question}</h2>
                                <span>{selected === i ? 'x' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                <h2 className='lg:text-2xl text-md  mt-10'>{item.answer}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <EmailInput />
            </div>
        </>
    );
}

export default Accordion;