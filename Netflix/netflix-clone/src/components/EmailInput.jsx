import React from 'react';

const EmailInput = () => {
    return (
        <>
            <p className='font-normal text-center max-w-[250px] lg:max-w-[800px] mx-auto mb-4 md:text-[1.2rem] md:max-w-[430px]'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex items-center justify-center flex-col lg:flex-row'>
                <input type="text" className='py-3 mb-3 lg:mb-0 2xs:w-[290px] xs:w-[345px] w-[20px] lg:py-5 px-2 text-sm lg:text-lg lg:w-[450px] outline-blue-700' placeholder='Email address' />
                <button className='py-2 lg:py-[16px] bg-[#e50914] rounded-sm lg:rounded-none px-5 lg:px-6 lg:text-[1.5rem] hover:bg-[#f40612]'>Get Started</button>
            </div>
        </>
    );
}

export default EmailInput;