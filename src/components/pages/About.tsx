import React from 'react';

function About() {
    return (
        <section id='about'>
            <div className='mx-auto flex px-10 py-5 md:flex-row flexcol items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center font-medium text-black'>
                    <h1 className='font-sans title-font sm:text-4xl text-3xl mb-4'>
                        GREETINGS! I'M ANDREW!
                    </h1>
                    <h2 className='font-sans'>
                        PROGRAMMER, MATH ENJOYER, AND CASUAL GAMER
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default About;