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
                    <p className="mb-8 leading-relaxed">
                        <br />
                        <br />
                        <br />
                        Hi! My name is Andrew Jiang. I am a 12th Grade student currently attending Dr. Frank J. Hayden Secondary School. <br />
                        I am super passionate about STEM and love to learn whatever I can about it in my free time! I like to spend my time <br />
                        solving math problems, competitive programming problems, and working on projects like this website! On another <br />
                        note, I also do love world affairs and geopolitics, and I try and spend my time learning about the world and <br />
                        understanding us as humans more. For this reason, I am super into Model United Nations as well, and have been <br />
                        to many conferences where I can debate, discuss, negotiate, and solve world issues with many peers that I have <br />
                        never met before! Also, I do like getting on and playing video games from time to time :D.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#projects"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        My Projects!
                        </a>
                        <a
                        href="#contact"
                        className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                        </a>
                    </div>
                </div>
                    
            </div>
        </section>
    );
}

export default About;