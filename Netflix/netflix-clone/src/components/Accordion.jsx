import React, { useState } from 'react';
import { accordionData } from '../constants';
import './Accordion.css';

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
            <h1 className='text-[2.7rem] text-center pb-10 font-bold'>Frequently Asked Questions</h1>
            <div className='w-[780px] mx-auto'>
                {accordionData.map((item, i) => (
                    <div className='bg-[#303030] mb-2 py-5 px-7'>
                        <div className='flex items-center justify-between cursor-pointer' onClick={() => toggle(i)}>
                            <h2 className='text-2xl'>{item.question}</h2>
                            <span>{selected === i ? 'x' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <h2 className='text-2xl mt-10'>{item.answer}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Accordion;